import Base from './base.js';

class TextNode extends Base {

	constructor(options) {
		super(options, [
			'startDrag',
			'drag',
			'stopDrag',
			'onNodeSelect',
			'remove',
			'breakRefs',
			'killDOM',
			'selectedCuePoint'
		])
		if(!this.data.position) {
			this.data.position = { left: 0, top: 0};
		}
		this.create();
		this.bindEvents();
	}

	create() {
		let style = `left: ${this.data.position.left}px; top: ${this.data.position.top}px`;
		this.$el = $(`<div class='node ${this.data.label}' data-id='${this.data.id}' style='${style}'>${this.data.id} ${this.data.text}</div>`);
		this.$container.append(this.$el);
	}

	bindEvents() {
		this.$el.bind("mousedown", this.startDrag);
		this.events.bind("node:select", this.onNodeSelect);
		this.events.on("cuepoints:selected", this.selectedCuePoint)
	}

	unbindEvents() {
		this.$appEl.unbind("mousemove", this.drag);
		this.$appEl.unbind("mouseup", this.stopDrag);
		this.$el.unbind("mousedown", this.startDrag);
		this.events.unbind("node:select", this.onNodeSelect);
	}

	selectedCuePoint(cp) {
		if(cp.nodeID === this.data.id) {
			this.events.trigger("node:select", this);
		}
	}

	startDrag(e) {
		this.dragOffsetX = this.$container[0].getBoundingClientRect().left
		this.dragOffsetY = this.$container[0].getBoundingClientRect().top
		this.$appEl.bind("mousemove", this.drag);
		this.$appEl.bind("mouseup", this.stopDrag);
		this.$el.css({'zIndex': 1000})
		this.$el.addClass("selected")
		this.events.trigger("node:select", this)
	}

	stopDrag() {
		this.$appEl.unbind("mousemove", this.drag);
		this.$appEl.unbind("mouseup", this.stopDrag);
		this.$el.css({'zIndex': 1})
		this.events.trigger('node:update', {
			changed: ['position'],
			data: this.data,
			node: this.data
		})
	}

	drag(e) {
		this.data.position.left = (e.pageX * this.zoomandpan.state.zoom) - (this.dragOffsetX * this.zoomandpan.state.zoom);
		this.data.position.top = (e.pageY * this.zoomandpan.state.zoom) - (this.dragOffsetY * this.zoomandpan.state.zoom);
		this.$el.css({left: this.data.position.left, top: this.data.position.top});
		
		this.events.trigger('node:move', this);
	}

	onNodeSelect(node) {
		if(node.data.id !== this.data.id) {
			this.$el.removeClass("selected")
		}
	}

	sendBack() {
		this.$el.addClass("unfocus")
	}

	bringForward() {
		this.$el.removeClass("unfocus")
	}

	remove() {
		// console.log(this);
		this.unbindEvents();
		this.killDOM();
		this.breakRefs();
	}

	killDOM() {
		this.$el.remove();
	}

	breakRefs() {
		this.data = null;
		this.zoomandpan = null;
		this.$appEl = null;
		this.$container = null;
		this.events = null;
		this.$el = null;
		Object.keys(this).forEach((key) => {
			delete this[key];
		})
	}

}

export default TextNode;