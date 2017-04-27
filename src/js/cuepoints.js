import Base from './base.js';

class CuePoints extends Base{
	
	constructor(options) {
		super(options, [
			'bindEvents',
			'add',
			'edit',
			'delete',
			'select'
		])
		this.state.highestID = 0;
		
		this.content.collection = [];
		this.bindEvents();
	}

	bindEvents() {
		this.events.on("cuepoints:add", this.add);
		this.events.on("cuepoints:edit", this.edit);
		this.events.on("cuepoints:delete", this.delete);
		this.events.on("cuepoints:select", this.select);
	}

	add(sid) {
		this.state.highestID++;
		let cp = {
			id: this.state.highestID,
			timestamp: -1,
			nodeID: -1,
			loopAt: -1,
			ending: false,
			text: null,
			scriptID: sid
		}
		this.content.collection.push(cp)
		this.events.trigger("cuepoints:added", cp);
	}

	select(id) {

		this.content.collection.forEach((cp) => {
			if(cp.id === id) {
				this.events.trigger("cuepoints:selected", cp)
			}
		})
	}

	edit(obj) {
		// console.log('edit', obj)
		this.content.collection.forEach((cp) => {
			if(cp.id === obj.id) {
				cp.nodeID = obj.nodeID
				cp.timestamp = obj.timestamp
				cp.loopAt = obj.loopAt
				cp.ending = obj.ending
				cp.zone = obj.zone
				cp.text = obj.text
				this.events.trigger("cuepoints:edited", cp)
			}
		})
		// console.log(this.collection)
	}

	delete() {

	}

	setCollection(data) {
		this.content.collection = data;
		this.content.collection.forEach((cp) => {
			if(cp.id > this.state.highestID) this.state.highestID = cp.id;
		})
	}
}

export default CuePoints;