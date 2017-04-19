import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

class DataManager {
	
	constructor(options) {
		extend(this, options);
		bindAll(this, [
			'setNodes',
			'deleteNode',
			'update',
			'saveChanges'
		]);

		this.changed = {
			nodes:{},
			cuepoints:{}
		};
		this.events.on("node:update", this.update);
		this.events.on("savechanges", this.saveChanges);
		this.events.on("node:delete", this.deleteNode);

		this.events.on("cuepoint:update", this.cuepointUpdate);
	}	

	cuepointUpdate(e) {
		if(!this.changed.cuepoints[e.id]) {
			this.cuepoints.forEach((cuepoint) => {
				if(e.id === cuepoint.id) this.changed.cuepoints[e.id] = cuepoint;
			})
		}
		e.changed.forEach((change) => {
			this.changed.cuepoints[e.id][change] = e.data[change];
		})
	}

	update(e) {
		if(!this.changed.nodes[e.id]) {
			this.nodes.forEach((node) => {
				if(e.id === node.id) this.changed.nodes[e.id] = node;
			})
		}
		e.changed.forEach((change) => {
			this.changed.nodes[e.id][change] = e.data[change];
		})

	}

	saveChanges() {
		let nodes = [], cuepoints = [];
		// console.log(this.changed)
		Object.keys(this.changed.nodes).forEach((key) => {
			nodes.push(this.changed.nodes[key]);
		})
		Object.keys(this.changed.cuepoints).forEach((key) => {
			cuepoints.push(this.changed.cuepoints[key]);
		})
		// console.log(nodes)
		$.ajax({
			type: "post",
			url: "/api/script/update",
			data: {
				nodes: JSON.stringify(nodes),
				cuepoints: cuepoints
			}
		})
		.done((e) => {
			console.log(e)
		 this.changed = {}
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

	setNodes(data) {
		this.nodes = data;
	}

}

export default DataManager;