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
			'seek'
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
		this.$controls.find(".playpause").on("click", this.playToggle);
		this.events.on("node:select", this.handleNodeSelect)
		this.$playbar.on("click", this.seek);
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

	handleNodeSelect(node) {
		let ts, perc;
		if(
			node.data.id === -1 ||
			!node.data.timestamp
		) {
			ts = 0;
			perc = 0;
			this.hide();
		} else {
			ts = parseFloat(node.data.timestamp);
			perc = ts/this.video.duration * 100;
		}
		this.video.currentTime = ts;
		this.$playbar.find(".time").html(ts);
		this.$playbar.find(".play").css({
			'width':perc+"%"
		})
	}

	show() {
		this.$parent.addClass("show");
	}

	hide() {
		this.$parent.removeClass("show");
	}

	seek(e) {
		let seekTo = (e.offsetX/this.$playbar.width() * this.video.duration).toFixed(4);
		console.log(seekTo);
		this.video.currentTime = seekTo;
	}

	update() {
		let perc = this.video.currentTime/this.video.duration * 100;
		this.$playbar.find(".time").html(this.video.currentTime);
		this.$playbar.find(".play").css({
			'width':perc+"%"
		})

	}
}


export default VideoPlayer;