import Base from './base.js';

import TextNode from './textnode.js';
import Lines from './lines.js';
import ZoomAndPan from './zoomandpan.js';
import ControlPanel from './controlpanel.js';
import VideoPlayer from './videoplayer.js';

import scriptEl from '../pug/script.pug';

const config = {
	startingZoom: 1
}

let lines = null;
let $scriptContainer = null;
let zoomandpan = null;
let controlpanel = null;

class Script extends Base {
	
	constructor(options) {
		super(options, [
			'create',
			'showLabelBranch',
			'handleNodeSelect',
			'showUnfinished',
			'deleteNode'
		]);
		this.create();
		this.bindEvents();
	}

	create() {
		$scriptContainer = $(scriptEl());
		this.$parent.append($scriptContainer)
		this.videoplayer = new VideoPlayer({
			$parent: $scriptContainer.find(".video-player"),
			videoURL: this.content.data.script.videoURL,
			events: this.events,
			cuepoints: this.content.data.cuepoints
		});

		this.zoomandpan = new ZoomAndPan({
			parent: $scriptContainer.find(".stage")[0], 
			events: this.events,
			state: {
				zoom: config.startingZoom,
				dampingFactor: 0.9,
				minZoom: 1,
				maxZoom: 20,
				zoomSpeed: 2,
				limitZoom: true,
				excludedClasses: ['node'],
				zoomEnabled: true
			}
		})

		this.content.nodes = {};
		this.content.data.nodes.forEach((node) => {
			this.content.nodes[node.id] = new TextNode({
				data: node,
				zoomandpan: this.zoomandpan,
				$appEl: this.$parent,
				$container: this.zoomandpan.$panner,
				events: this.events
			});
		})

		this.content.nodeBranchMap = {};
		Object.keys(this.content.nodes).forEach((key) => {
			this.content.nodeBranchMap[key] = {};
			if(!this.content.nodes[key].data.outgoing) this.content.nodes[key].data.outgoing = [];
			let outgoing = this.content.nodes[key].data.outgoing;
			outgoing.forEach((idx) => {
				this.content.nodeBranchMap[key][idx] = {};
			});
		})

		lines = new Lines({
			nodes: this.content.nodes,
			nodeBranchMap: this.content.nodeBranchMap,
			$parent: this.zoomandpan.$panner,
			events: this.events
		})

		controlpanel = new ControlPanel({
			$parent: $scriptContainer.find(".control-panel"),
			scriptID: this.id,
			events: this.events,
			cuepoints: this.content.data.cuepoints
		})
	}

	bindEvents() {
		this.events.on("node:select", this.handleNodeSelect)
		this.events.on("node:show:labelbranch", this.showLabelBranch)
		this.events.on("node:show:unfinished", this.showUnfinished);
		this.events.on("node:delete", this.deleteNode);
	}

	deleteNode(e) {
		this.content.nodes[e].remove();
		delete this.content.nodes[e];
		// console.log(this.content.data[e])
	}

	handleNodeSelect(node) {
		this.bringNodesForward();
	}

	showLabelBranch(obj) {
		this.sendNodesBack();
		this.content.nodes[obj.node.data.id].bringForward();

		let recurse = (key1) => {
			Object.keys(this.content.nodeBranchMap[key1]).forEach((key2) => {
				if(
					this.content.nodes[key2].data.label === obj.node.data.label ||
					this.content.nodes[key2].data.label === "ending"
				) {
					this.content.nodes[key2].bringForward();
					recurse(key2);
				}
			})
		}
		recurse(obj.node.data.id)
	}

	showUnfinished(bool) {
		let keys = {};

		Object.keys(this.content.nodes).forEach((key) => {
			let og = this.content.nodes[key].data.outgoing;
			if(og.length > 4) {
				// console.log(og);
				var str = "";
				og.forEach((key) => {
					str += " "+this.content.nodes[key].data.label;
				})
				// console.log(str)
				// console.log(og, this.content.nodes[key].data.label, og.length === 4, og.length === 1, this.content.nodes[og[0]].data.label === "ending");
			}
			if(
				// this.content.nodes[key].data.label === "ending" ||
				// og.length === 4 ||
				// (
				// 	og.length === 1 &&
				// 	this.content.nodes[og[0]].data.label === "ending"

				// )
				og.length <= 4
			) {
				keys[key] = 1;
			}
		})

		this.sendNodesBack(keys)
	}

	sendNodesBack(arr) {
		let keys = (arr) ? arr : this.content.nodes;
		Object.keys(keys).forEach((key) => {
			this.content.nodes[key].sendBack()
		})
	}

	bringNodesForward() {
		Object.keys(this.content.nodes).forEach((key) => {
			this.content.nodes[key].bringForward()
		})
	}

}

export default Script