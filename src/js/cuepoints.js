import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

class CuePoints {
	
	constructor(options) {
		extend(this, options);
		bindAll(this, [
			'bindEvents',
			'add',
			'edit',
			'delete',
			'select'
		])
		this.state = {
			highestID: 0
		}
		this.collection = [];
		this.bindEvents();
	}

	bindEvents() {
		this.events.on("cuepoints:add", this.add);
		this.events.on("cuepoints:edit", this.edit);
		this.events.on("cuepoints:delete", this.delete);
		this.events.on("cuepoints:select", this.select);
	}

	add() {
		this.state.highestID++;
		let cp = {
			id: this.state.highestID,
			timestamp: -1,
			nodeID: -1,
			loopAt: -1,
			ending: false,
			text: null
		}
		this.collection.push(cp)
		this.events.trigger("cuepoints:added", cp);
	}

	select(id) {
		this.collection.forEach((cp) => {
			if(cp.id === id) {
				console.log(cp)
				this.events.trigger("cuepoints:selected", cp)
			}
		})
	}

	edit(obj) {
		console.log('edit', obj)
		this.collection.forEach((cp) => {
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
		console.log(this.collection)
	}

	delete() {

	}
}

export default CuePoints;