import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import TextNode from './textnode.js';
import Lines from './lines.js';
import ZoomAndPan from './zoomandpan.js';
import ControlPanel from './controlpanel.js';

import scriptEl from '../pug/script.pug';

const config = {
	startingZoom: 1
}

let lines = null;
let $scriptContainer = null;
let zoomandpan = null;
let controlpanel = null;

class Script {
	
	constructor(options) {
		extend(this,options);
		bindAll(this,[
			'load',
			'create',
			'showLabelBranch',
			'handleNodeSelect',
			'showUnfinished',
			'deleteNode'
		])
		this.content = {
			data: {},
			nodes: {},
			nodeBranchMap: {}
		}
		this.data = [];
		this.load()
			.then(() => {
				this.create();
				this.bindEvents();
			});
	}

	load() {
		return new Promise((resolve, reject) => {
			$.get("/api/script?scriptID="+this.id, (resp) => {
				this.content.data = JSON.parse(resp.response);
				this.datamanager.setNodes(this.content.data);
				resolve()
			})
		})
	}

	create() {

		$scriptContainer = $(scriptEl());
		this.$parent.append($scriptContainer)

		zoomandpan = new ZoomAndPan({
			parent: $scriptContainer.find(".stage")[0], 
			zoom: config.startingZoom,
			dampingFactor: 0.9,
			minZoom: 1,
			maxZoom: 20,
			zoomSpeed: 2,
			limitZoom: true,
			excludedClasses: ['node'],
			events: this.events
		})


		this.content.data.forEach((node) => {
			this.content.nodes[node.id] = new TextNode({
				data: node,
				zoomandpan: zoomandpan,
				$appEl: this.$parent,
				$container: zoomandpan.$panner,
				events: this.events
			});
		})

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
			$parent: zoomandpan.$panner,
			events: this.events
		})

		controlpanel = new ControlPanel({
			$parent: $scriptContainer.find(".control-panel"),
			events: this.events
		})
	}

	bindEvents() {
		this.events.on("node:select", this.handleNodeSelect)
		this.events.on("node:show:labelbranch", this.showLabelBranch)
		this.events.on("node:show:unfinished", this.showUnfinished);
		this.events.on("node:delete", this.deleteNode);
	}

	deleteNode(e) {
		console.log(e)
		this.content.nodes[e].remove();
		delete this.content.nodes[e];
		console.log(this.content.data[e])
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
				console.log(og);
				var str = "";
				og.forEach((key) => {
					str += " "+this.content.nodes[key].data.label;
				})
				console.log(str)
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