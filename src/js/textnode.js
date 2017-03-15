import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

class TextNode {

	constructor(options) {
		extend(this, options);
		this.create();
		this.bind();
	}

	create() {
		this.$el = $(`<div class='node ${this.data.label}'>${this.data.text}</div>`);
		this.$container.append(this.$el);
	}

	bind() {
		bindAll(this, [
			'startDrag',
			'drag',
			'stopDrag'
		])
		this.$el.on("mousedown", this.startDrag);
		this.$appEl.on("mouseup", this.stopDrag);
	}

	startDrag(e) {
		this.dragOffsetX = this.$container[0].getBoundingClientRect().left
		this.dragOffsetY = this.$container[0].getBoundingClientRect().top
		this.$appEl.bind("mousemove", this.drag);
	}

	stopDrag() {
		this.$appEl.unbind("mousemove", this.drag);
	}

	drag(e) {

		let x = (e.pageX * this.zoomandpan.zoom) - (this.dragOffsetX * this.zoomandpan.zoom);
		let y = (e.pageY * this.zoomandpan.zoom) - (this.dragOffsetY * this.zoomandpan.zoom);

		this.$el.css({left: x, top: y})
	}
}

export default TextNode;