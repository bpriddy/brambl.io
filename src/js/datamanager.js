import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';
import CuePoints from './cuepoints.js';

class DataManager {
	
	constructor(options) {
		extend(this, options);
		bindAll(this, [
			'saveChanges',
			'setNodes',

			'addNode',
			'updateNode',
			'deleteNode',

			'addCuePoint',
			'updateCuePoint',
			'deleteCuePoint'
		]);


		this.cuepoints = new CuePoints({
			events: this.events
		})

		this.changed = {
			nodes:{},
			cuepoints:{}
		};
		this.events.on("savechanges", this.saveChanges);

		this.events.on("node:add", this.addNode);
		this.events.on("node:update", this.updateNode);
		this.events.on("node:delete", this.deleteNode);

		this.events.on("cuepoints:added", this.addCuePoint);
		this.events.on("cuepoints:edited", this.updateCuePoint);
		this.events.on("cuepoints:delete", this.deleteCuePoint);
	}	

	updateNode(e) {
		if(!this.changed.nodes[e.node.id]) {
			this.changed.nodes[e.node.id] = e.node;
		} 
		e.changed.forEach((change) => {
			this.changed.nodes[e.node.id][change] = e.data[change];
		})
		console.log(this.changed)
	}

	updateCuePoint(e) {
		if(!this.changed.cuepoints[e.id]) {
			this.changed.cuepoints[e.id] = e
		} else {
			Object.keys(this.changed.cuepoints).forEach((key) => {
				if(e.id === key) {
					Object.keys(e).forEach((prop) => {
						this.changed.cuepoints[e.id][prop] = e[prop];
					})
				}
			})
		}

		// console.log(e)
	}

	addNode(e) {

	}

	saveChanges() {

		let data = { nodes: [], cuepoints: [] };
		Object.keys(this.changed.nodes).forEach((key) => {
			data.nodes.push(this.changed.nodes[key]);
		})
		data.nodes = JSON.stringify(data.nodes);

		Object.keys(this.changed.cuepoints).forEach((key) => {
			data.cuepoints.push(this.changed.cuepoints[key]);
		})
		data.cuepoints = JSON.stringify(data.cuepoints);

		$.ajax({
			type: "post",
			url: "/api/update",
			data: data
		})
		.done((e) => {
			console.log(e)
			 this.changed = {cuepoints:{},nodes:{}}
		})
	}

	addNode(e) {
		console.log('need to write code for adding node');
	}

	addCuePoint(e) {
		console.log(e)
		$.ajax({
			type: "post",
			url: "/api/cuepoints/add",
			data: { cp: JSON.stringify(e) }
		})
		.done((e) => {
			console.log(e)
		})
	}

	deleteNode(e) {
		$.ajax({
			type: "post",
			url: "/api/script/delete",
			data: {
				id: e
			}
		})
		.done((e) => {
			console.log(e)
		})
	}


	deleteCuePoint(e) {
		$.ajax({
			type: "post",
			url: "/api/script/delete",
			data: {
				id: e
			}
		})
		.done((e) => {
			console.log(e)
		})
	}


	setNodes(data) {
		this.nodes = data;
	}

	setCuePoints(data) {
		this.cuepoints.setCollection(data);
	}

}

export default DataManager;