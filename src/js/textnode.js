import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

class TextNode {

	constructor(options) {
		extend(this, options);
		if(!this.data.position) {
			this.data.position = { left: 0, top: 0};
		}
		this.create();
		this.bind();
	}

	create() {
		let style = `left: ${this.data.position.left}px; top: ${this.data.position.top}px`;
		this.$el = $(`<div class='node ${this.data.label}' data-id='${this.data.id}' style='${style}'>${this.data.id}::: ${this.data.text}</div>`);
		this.$container.append(this.$el);
	}

	bind() {
		bindAll(this, [
			'startDrag',
			'drag',
			'stopDrag'
		])
		this.$el.on("mousedown", this.startDrag);
	}

	startDrag(e) {
		this.dragOffsetX = this.$container[0].getBoundingClientRect().left
		this.dragOffsetY = this.$container[0].getBoundingClientRect().top
		this.$appEl.bind("mousemove", this.drag);
		this.$appEl.bind("mouseup", this.stopDrag);
		this.$el.css({'zIndex': 1000})
	}

	stopDrag() {
		this.$appEl.unbind("mousemove", this.drag);
		this.$appEl.unbind("mouseup", this.stopDrag);
		this.$el.css({'zIndex': 1})
		this.events.trigger('node:update', this.data)
	}

	drag(e) {
		// console.log(e.currentTarget)
		this.data.position.left = (e.pageX * this.zoomandpan.zoom) - (this.dragOffsetX * this.zoomandpan.zoom);
		this.data.position.top = (e.pageY * this.zoomandpan.zoom) - (this.dragOffsetY * this.zoomandpan.zoom);


		this.$el.css({left: this.data.position.left, top: this.data.position.top})
	}
}

export default TextNode;