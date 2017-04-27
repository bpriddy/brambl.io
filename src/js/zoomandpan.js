import Base from './base.js';

import zoomandpanEl from '../pug/zoomandpan.pug';

class Zoomer extends Base {
		
	constructor(options) {
		super(options, [
			'onTouchStart',
			'onTouchEnd',
			'onTouchMove',
			'onMouseDown',
			'onMouseMove',
			'onMouseUp',
			'onMouseWheel'
		]);


		// this.state.rotateStart = new THREE.Vector2();
		// this.state.rotateEnd = new THREE.Vector2();
		// this.state.rotateDelta = new THREE.Vector2();
		// this.state.spherical = new THREE.Spherical();
		this.state.zoomValue = 0;
		this.state.distanceBetweenFingers = null;
		this.state.zoomDelta = 0;
		// this.state.sphericalDelta = new THREE.Spherical();
		this.state.zoomEnabled = true;

		this.state.startingX = 0;
		this.state.startingY = 0;
		this.state.endingX = 0;
		this.state.endingY = 0;
		this.$el = $(zoomandpanEl());
		$(this.parent).append(this.$el);
		this.$zoomer = this.$el;
		this.$panner = this.$el.find(".panner");
		this.state.zoomerWidth = this.$zoomer.width();
		this.state.zoomerHeight = this.$zoomer.height();
		this.state.endingX = (this.state.zoomerWidth/2 / this.state.zoom);
		this.state.endingY = (this.state.zoomerHeight/2 / this.state.zoom);


		if(this.state.zoomEnabled) {
			this.setZoom();
		}
		this.bindEvents(true);
	}

	bindEvents(bool) {
		var method = bool ? 'addEventListener' : 'removeEventListener';
		this.parent[method]( 'touchstart', this.onTouchStart, false );
		this.parent[method]( 'touchend', this.onTouchEnd, false );
		this.parent[method]( 'touchmove', this.onTouchMove, false );
		this.parent[method]( 'mousedown', this.onMouseDown, false );
		this.parent[method]( 'mousemove', this.onMouseMove, false );
		this.parent[method]( 'mouseup', this.onMouseUp, false );
		// this.parent[method]( 'mouseleave', this.onMouseUp, false );
		this.parent[method]( 'wheel', this.onMouseWheel, false );
	}

	set enabled(value){
		this._enabled = value
		this.bindEvents(value)
	}
	get enabled (){ return this._enabled }

	onTouchStart(event) {
		this.rotateStart.set( event.touches[ 0 ].clientX, event.touches[ 0 ].clientY );
	}

	onTouchEnd(event) {
		//scope.dispatchEvent( endEvent );
		this.state.distanceBetweenFingers = null;
	}
	
	onTouchMove(event) {
		event.preventDefault();
		event.stopPropagation();
		if(event.touches.length > 1) {
			this.state.zoom(event);
			this.state.zooming = true;
			// this.clearRotation();
		} else if(this.state.zooming === true) {
			// this.rotateStart.set( event.touches[ 0 ].clientX, event.touches[ 0 ].clientY );
			// this.rotate(event);
			this.state.zooming = false;
		} else {
			// this.rotate(event);
			this.state.zooming = false;
		}
	}

	onMouseWheel(event) {
		this.state.zoomDelta = -(event.deltaY * 0.2);
		this.update();
		event.preventDefault();
	}

	zoom(event) {
		var dx = event.touches[0].clientX - event.touches[1].clientX;
		var dy = event.touches[0].clientY - event.touches[1].clientY;
		var distance = Math.sqrt(dx*dx + dy*dy) - 70;
		if(!this.state.distanceBetweenFingers) this.state.distanceBetweenFingers = distance;
		this.state.zoomDelta = distance - this.state.distanceBetweenFingers;
		this.state.distanceBetweenFingers = distance;
		
		this.update();
	}

	onMouseDown(event) {
		event.preventDefault();
		this.state.mouseMoving = true;
		this.state.excludedClasses.forEach((c) => {
			if($(event.target).hasClass(c)) this.state.mouseMoving = false;

		})
		if(!this.state.mouseMoving) this.state.nodeSelected = true;
		let x = this.state.endingX / this.state.zoom - (this.state.zoomerWidth/2 / this.state.zoom);
		let y = this.state.endingY / this.state.zoom - (this.state.zoomerHeight/2 / this.state.zoom);
		// console.log(this.endingX, this.endingY)

		this.state.startingX = event.pageX - x;
		this.state.startingY = event.pageY - y;
	}
	
	onMouseMove(event) {
		if ( !this.state.mouseMoving ) return;
		this.state.mouseMoved = true;
		// console.log(this.startingX, this.startingY)
		var x = ((event.pageX - this.state.startingX) * this.state.zoom) + (this.state.zoomerWidth/2);
		var y = ((event.pageY - this.state.startingY) * this.state.zoom) + (this.state.zoomerHeight/2);
		// console.log(x,y)
		this.$panner.css({
			left: x,
			top: y
		})
		this.state.endingX = x// / this.zoom - (this.$zoomerWidth/2 / this.zoom);
		this.state.endingY = y// / this.zoom - (this.$zoomerHeight/2 / this.zoom);
		// console.log(this.endingX, this.endingY)
		event.preventDefault();

	}

	onMouseUp(event) {
		this.state.mouseMoving = false;
		if(!this.state.mouseMoved && !this.state.nodeSelected) this.events.trigger("node:select", {data:{id:-1}});
		this.state.mouseMoved = false;
		this.state.nodeSelected = false;
	}

	set speed(val) {
		this.state.rotateSpeed = val;
	}

	setZoom() {
		this.$zoomer.css({
			// "transform": `perspective(${window.innerWidth}px) translate3d(0,0,-${window.innerWidth*(this.zoom-1)}px)`
			"transform": `scale(${1/this.state.zoom})`
		})
	}

	update() {

		if(this.$el && this.state.zoomEnabled) {
			this.state.zoomDelta *= this.state.dampingFactor;
			var targ = this.state.zoom - this.state.zoomDelta * 0.01 * this.state.zoomSpeed;
			if(targ < this.state.minZoom && this.state.limitZoom) {
				this.state.zoom = this.state.minZoom;
			} else if(targ > this.state.maxZoom && this.state.limitZoom) {
				this.state.zoom = this.state.maxZoom;
			} else {
				this.state.zoom = targ;
			}
			this.setZoom()
		}
		
	}


}

export default Zoomer;