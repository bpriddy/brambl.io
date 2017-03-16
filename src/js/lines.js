import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import lineSVG from '../pug/line.pug';

class Lines {

	constructor(options) {
		extend(this,options);
		bindAll(this, [
			'create',
			'onNodeMove',
			'positionLine',
			'moveIncomingLines',
			'moveOutgoingLines'
		])
		this.create()
		console.log(this.events)
		this.events.on("node:move", this.onNodeMove)
	}

	create() {
		this.lines = {};
		Object.keys(this.nodes).forEach((key) => {
			let outgoing = this.nodes[key].data.outgoing;
			let x1 = this.nodes[key].data.position.left;
			let y1 = this.nodes[key].data.position.top;
			this.lines[key] = {};
			outgoing.forEach((idx) => {
				let x2 = this.nodes[idx].data.position.left;
				let y2 = this.nodes[idx].data.position.top;

				let $svg = $(lineSVG({
					source: this.nodes[key].data.id,
					dest: this.nodes[idx].data.id,
				}));
				this.$parent.prepend($svg);

				this.positionLine($svg, x1,y1, x2,y2);

				this.lines[key][idx] = {}
				this.lines[key][idx].$svg = $svg;
			});
			
		})
	}

	positionLine($svg, x1,y1,x2,y2) {

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

	}

	onNodeMove(node) {
		this.moveIncomingLines(node)
		this.moveOutgoingLines(node)
	}

	moveIncomingLines(node) {
		node.data.incoming.forEach((idx) => {
			let line = this.lines[idx][node.data.id]
			this.positionLine( 
				line.$svg,  
				this.nodes[idx].data.position.left, 
				this.nodes[idx].data.position.top,
				node.data.position.left, 
				node.data.position.top
			)
		})
	}

	moveOutgoingLines(node) {
		node.data.outgoing.forEach((idx) => {
			let line = this.lines[node.data.id][idx];
			this.positionLine( 
				line.$svg, 
				node.data.position.left, 
				node.data.position.top, 
				this.nodes[idx].data.position.left, 
				this.nodes[idx].data.position.top
			)
		})
	}

}

export default Lines;