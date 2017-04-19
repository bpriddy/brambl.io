import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import videoplayerEl from '../pug/videoplayer.pug';

const CDN = "/assets/";

class VideoPlayer {

	constructor(options) {
		extend(this, options);
		this.videoURL = CDN + this.videoURL;
		bindAll(this, [
			'bindEvents',
			'playToggle',
			'handleNodeSelect',
			'create',
			'update',
			'show',
			'hide',
			'seek',
			'handleTimeKeyDown',
			'pause',
			'addCuePoint'
		])
		this.create();
		this.bindEvents();
	}

	create() {
		let ve = videoplayerEl({
			videoURL: this.videoURL
		})
		this.$parent.append($(ve));
		this.$el = this.$parent.find(".player");
		this.video = this.$el.find("video")[0];
		this.$controls = this.$el.find(".controls");
		this.$playbar = this.$controls.find(".playbar");
		this.paused = true;
	}

	bindEvents() {
		this.events.on("videoplayer:show", this.show);
		this.events.on("videoplayer:hide", this.hide);
		this.events.on("cuepoints:added", this.addCuePoint)
		this.$controls.find(".playpause").on("click", this.playToggle);
		this.events.on("node:select", this.handleNodeSelect)
		this.$playbar.on("click", this.seek);
		this.$controls.find(".time").on("keydown", this.handleTimeKeyDown)
		this.$controls.find(".time").on("click", this.pause)
	}

	playToggle() {
		this.paused = !this.paused;
		if(this.paused) {
			this.$controls.find(".playpause").addClass("paused");
			this.video.pause();
			clearInterval(this.updateInterval);
		} else {
			this.$controls.find(".playpause").removeClass("paused");
			this.video.play();
			this.updateInterval = setInterval(this.update, 50);
		}
	}

	pause() {
		if(!this.paused) this.playToggle();
		clearInterval(this.updateInterval);
	}

	handleNodeSelect(node) {
		console.log(node)
		// let ts, perc;
		// if(
		// 	node.data.id === -1 ||
		// 	!node.data.timestamp
		// ) {
		// 	ts = 0;
		// 	perc = 0;
		// 	this.hide();
		// 	if(!this.paused) this.playToggle();
		// } else {
		// 	ts = parseFloat(node.data.timestamp);
		// 	perc = ts/this.video.duration * 100;
		// }
		// this.video.currentTime = ts;
		// this.$playbar.find(".time").html(ts);
		// this.$playbar.find(".play").css({
		// 	'width':perc+"%"
		// })
	}

	addCuePoint(obj) {
		let cp = $("<div class='cuepoint' data-id="+obj.id+"></div>")
		let perc = (this.video.currentTime/this.video.duration * 100) + "%";
		console.log(perc)
		cp.css({
			left: perc
		})
		this.$playbar.find(".cuepoints").append(cp)
		obj.timestamp = this.video.currentTime;
		this.events.trigger("cuepoints:edit", obj)
	}

	handleTimeKeyDown(e) {
		if(e.keyCode === 13) {
			e.preventDefault();
			if(!this.paused) this.playToggle();
			let seekTo = parseFloat(this.$parent.find(".time").html());
			this.video.currentTime = seekTo;
			this.update()
		}
	}

	show() {
		this.$parent.addClass("show");
	}

	hide() {
		this.$parent.removeClass("show");
	}

	seek(e) {
		let seekTo = (e.offsetX/this.$playbar.width() * this.video.duration).toFixed(4);
		this.video.currentTime = seekTo;
		this.update()
	}

	update() {
		let perc = this.video.currentTime/this.video.duration * 100;
		this.$parent.find(".time").html(this.video.currentTime);
		this.$playbar.find(".play").css({
			'width':perc+"%"
		})

	}
}


export default VideoPlayer;