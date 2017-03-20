import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

class DataManager {
	
	constructor(options) {
		extend(this, options);
		bindAll(this, [
			'setNodes'
		]);

		this.changed = {};
		this.events.on("node:update", (e) => {
			
			if(!this.changed[e.id]) {
				this.nodes.forEach((node) => {
					if(e.id === node.id) this.changed[e.id] = node;
				})
			}
			e.changed.forEach((change) => {
				this.changed[e.id][change] = e.data[change];
			})

		})

		this.events.on("savechanges", () => {
			let arr = [];
			Object.keys(this.changed).forEach((key) => {
				arr.push(this.changed[key]);
			})
			console.log(arr)
			$.ajax({
				type: "post",
				url: "/api/script/update",
				data: {changed: JSON.stringify(arr)}
			})
			.done((e) => {
				console.log(e)
			 this.changed = {}
			})
		})
	}	

	setNodes(data) {
		this.nodes = data;
	}

}

export default DataManager;