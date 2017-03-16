import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import lineSVG from '../pug/line.pug';

class Lines {

	constructor(options) {
		extend(this,options);
		this.create()
	}

	create() {
		Object.keys(this.nodes).forEach((key) => {
			let outgoing = this.nodes[key].data.outgoing;
			let x1 = this.nodes[key].data.position.left;
			let y1 = this.nodes[key].data.position.top;
			outgoing.forEach((idx) => {
				// console.log(this.nodes[idx].data.position.left);
				let x2 = this.nodes[idx].data.position.left;
				let y2 = this.nodes[idx].data.position.top;

				let $svg = $(lineSVG({
					source: this.nodes[key].data.id,
					dest: this.nodes[idx].data.id,
				}));
				this.$parent.prepend($svg);
				let $line = $svg.find("line")


				let aX = x1;
				let bX = x2;
				let xDir = 1;
				if(x2 < x1) {
					aX = x2;
					bX = x1;
					xDir = -1;
				}

				let aY = y1;
				let bY = y2;
				let yDir = 1;
				if(y2 < y1) {
					aY = y2;
					bY = y1;
					yDir = -1;
				}
				if(this.nodes[key].data.id === 302) {
					console.log(x1, x2, y1, y2)
				}
				let width = Math.abs(bX - aX);
				let height = Math.abs(bY - aY);
				$svg.attr("width", width);
				$svg.attr("height", height);
				$svg.attr("viewBox", "0 0 "+width+" "+height)

				if(xDir<0) {
					$line.attr("x1", 0);
					$line.attr("x2", width);
				} else {
					$line.attr("x1", width);
					$line.attr("x2", 0);
				}
				if(yDir<0) {
					$line.attr("y1", 0);
					$line.attr("y2", height);
				} else {
					$line.attr("y1", height);
					$line.attr("y2", 0);
				}

				$svg.css({
					"left": aX+"px",
					"top": aY+"px"
				})
			});
			
		})
		// this.nodes.forEach((node) => {
		// 	console.log(this.getLocation(node.outgoing[0]))
		// })
	}

}

export default Lines;