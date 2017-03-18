import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

class DataManager {
	
	constructor(options) {
		extend(this, options);
		this.changed = [];
		this.events.on("node:update", (e) => {
			// console.log('node change',e)
			var matched = false;
			this.changed.forEach((node) => {
				if(node.id === e.id) {
					node = e;
					matched = true;
				}
			})
			if(!matched) this.changed.push(e);
		})

		this.events.on("savechanges", () => {
			
			$.ajax({
				type: "post",
				url: "/api/script/update",
				data: {changed: JSON.stringify(this.changed)}
			})
			.done((e) => {
				console.log(e)
			})
		})
	}	

}

export default DataManager;