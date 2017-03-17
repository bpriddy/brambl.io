import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

import zoomandpanEl from '../pug/zoomandpan.pug';

class Zoomer {
		
	constructor(options) {
		this.setProps();
		extend(this,options);
		bindAll(this, [
			'onTouchStart',
			'onTouchEnd',
			'onTouchMove',
			'onMouseDown',
			'onMouseMove',
			'onMouseUp',
			'onMouseWheel'
		]);

		this.startingX = 0;
		this.startingY = 0;
		this.endingX = 0;
		this.endingY = 0;
		this.$el = $(zoomandpanEl());
		$(this.parent).append(this.$el)
		this.$zoomer = this.$el;
		this.$panner = this.$el.find(".panner");
		this.$zoomerWidth = this.$zoomer.width();
		this.$zoomerHeight = this.$zoomer.height();
		this.endingX = (this.$zoomerWidth/2 / this.zoom);
		this.endingY = (this.$zoomerHeight/2 / this.zoom);


		if(options.enabled === undefined) {
			this.enabled = true;
			this.setZoom()
		}
	}

	setProps() {
		// this.rotateStart = new THREE.Vector2();
		// this.rotateEnd = new THREE.Vector2();
		// this.rotateDelta = new THREE.Vector2();
		// this.spherical = new THREE.Spherical();
		this.zoomValue = 0;
		this.distanceBetweenFingers = null;
		this.zoomDelta = 0;
		// this.sphericalDelta = new THREE.Spherical();
		this.zoomEnabled = true;
	}

	bindEvents(bool) {
		var method = bool ? 'addEventListener' : 'removeEventListener';
		this.parent[method]( 'touchstart', this.onTouchStart, false );
		this.parent[method]( 'touchend', this.onTouchEnd, false );
		this.parent[method]( 'touchmove', this.onTouchMove, false );
		this.parent[method]( 'mousedown', this.onMouseDown, false );
		this.parent[method]( 'mousemove', this.onMouseMove, false );
		this.parent[method]( 'mouseup', this.onMouseUp, false );
		this.parent[method]( 'mouseleave', this.onMouseUp, false );
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
		this.distanceBetweenFingers = null;
	}
	
	onTouchMove(event) {
		event.preventDefault();
		event.stopPropagation();
		if(event.touches.length > 1) {
			this.zoom(event);
			this.zooming = true;
			// this.clearRotation();
		} else if(this.zooming === true) {
			// this.rotateStart.set( event.touches[ 0 ].clientX, event.touches[ 0 ].clientY );
			// this.rotate(event);
			this.zooming = false;
		} else {
			// this.rotate(event);
			this.zooming = false;
		}
	}

	onMouseWheel(event) {
		this.zoomDelta = -(event.deltaY * 0.2);
		this.update();
		event.preventDefault();
	}

	zoom(event) {
		var dx = event.touches[0].clientX - event.touches[1].clientX;
		var dy = event.touches[0].clientY - event.touches[1].clientY;
		var distance = Math.sqrt(dx*dx + dy*dy) - 70;
		if(!this.distanceBetweenFingers) this.distanceBetweenFingers = distance;
		this.zoomDelta = distance - this.distanceBetweenFingers;
		this.distanceBetweenFingers = distance;
		
		this.update();
	}

	onMouseDown(event) {
		event.preventDefault();
		this.mouseMoving = true;
		this.excludedClasses.forEach((c) => {
			if($(event.target).hasClass(c)) this.mouseMoving = false;
		})
		if(this.mouseMoving) this.events.trigger("node:select", -1);
		let x = this.endingX / this.zoom - (this.$zoomerWidth/2 / this.zoom);
		let y = this.endingY / this.zoom - (this.$zoomerHeight/2 / this.zoom);
		// console.log(this.endingX, this.endingY)

		this.startingX = event.pageX - x;
		this.startingY = event.pageY - y;
	}
	
	onMouseMove(event) {
		if ( !this.mouseMoving ) return;
		// console.log(this.startingX, this.startingY)
		var x = ((event.pageX - this.startingX) * this.zoom) + (this.$zoomerWidth/2);
		var y = ((event.pageY - this.startingY) * this.zoom) + (this.$zoomerHeight/2);
		// console.log(x,y)
		this.$panner.css({
			left: x,
			top: y
		})
		this.endingX = x// / this.zoom - (this.$zoomerWidth/2 / this.zoom);
		this.endingY = y// / this.zoom - (this.$zoomerHeight/2 / this.zoom);
		// console.log(this.endingX, this.endingY)
		event.preventDefault();

	}

	onMouseUp(event) {
		this.mouseMoving = false;
	}

	set speed(val) {
		this.rotateSpeed = val;
	}

	setZoom() {

		this.$zoomer.css({
			// "transform": `perspective(${window.innerWidth}px) translate3d(0,0,-${window.innerWidth*(this.zoom-1)}px)`
			"transform": `scale(${1/this.zoom})`
		})
	}

	update() {
		if(this.$el && this.zoomEnabled) {
			this.zoomDelta *= this.dampingFactor;
			var targ = this.zoom - this.zoomDelta * 0.01 * this.zoomSpeed;
			if(targ < this.minZoom && this.limitZoom) {
				this.zoom = this.minZoom;
			} else if(targ > this.maxZoom && this.limitZoom) {
				this.zoom = this.maxZoom;
			} else {
				this.zoom = targ;
			}
			this.setZoom()
		}
		
	}


}

export default Zoomer;