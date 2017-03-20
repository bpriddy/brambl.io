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

		this.changed = {};
		this.events.on("node:update", this.update);
		this.events.on("savechanges", this.saveChanges);
		this.events.on("node:delete", this.deleteNode);
	}	

	update(e) {
		if(!this.changed[e.id]) {
			this.nodes.forEach((node) => {
				if(e.id === node.id) this.changed[e.id] = node;
			})
		}
		e.changed.forEach((change) => {
			this.changed[e.id][change] = e.data[change];
		})
	}

	saveChanges() {
		let arr = [];
		Object.keys(this.changed).forEach((key) => {
			arr.push(this.changed[key]);
		})
		console.log(arr)
		$.ajax({
			type: "post",
			url: "/api/script/update",
			data: {
				changed: JSON.stringify(arr)
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