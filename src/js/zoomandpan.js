import extend from 'lodash-es/extend';
import bindAll from 'lodash-es/bindAll';

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
		])
		if(options.enabled === undefined) {
			this.enabled = true;
			this.startingX = 0;
			this.startingY = 0;
			this.endingX = 0;
			this.endingY = 0;
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
		this.el[method]( 'touchstart', this.onTouchStart, false );
		this.el[method]( 'touchend', this.onTouchEnd, false );
		this.el[method]( 'touchmove', this.onTouchMove, false );
		this.el[method]( 'mousedown', this.onMouseDown, false );
		this.el[method]( 'mousemove', this.onMouseMove, false );
		this.el[method]( 'mouseup', this.onMouseUp, false );
		this.el[method]( 'mouseleave', this.onMouseUp, false );
		this.el[method]( 'wheel', this.onMouseWheel, false );
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
		this.startingX = event.pageX - this.endingX
		this.startingY = event.pageY - this.endingY
		// this.rotateStart.set( event.clientX, event.clientY );
	}
	
	onMouseMove(event) {
		if ( !this.mouseMoving ) return;
		var x = event.pageX - this.startingX - (window.innerWidth*1.5);
		var y = event.pageY - this.startingY - (window.innerHeight*1.5);
		console.log(x,y)
		this.zoomObject.css({
			left: x,
			top: y
		})
		this.endingX = x + (window.innerWidth*1.5);
		this.endingY = y + (window.innerHeight*1.5);
		event.preventDefault();

		// this.rotateEnd.set( event.clientX, event.clientY );
		// this.rotateDelta.subVectors( this.rotateEnd, this.rotateStart );
		// this.rotateLeft( 2 * Math.PI * this.rotateDelta.x / this.el.clientWidth  * this.rotateSpeed );
		// this.rotateUp( 2 * Math.PI * this.rotateDelta.y   / this.el.clientHeight * this.rotateSpeed );
		// this.rotateStart.copy( this.rotateEnd );
		// this.update();
	}

	onMouseUp(event) {
		this.mouseMoving = false;
		
		// document.removeEventListener( 'mousemove', onMouseMove, false );
		// document.removeEventListener( 'mouseup', onMouseUp, false );
		// scope.dispatchEvent( endEvent );
	}

	set speed(val) {
		this.rotateSpeed = val;
	}

	setZoom() {
		this.zoomObject.css({
			// "transform": `perspective(${window.innerWidth}px) translate3d(0,0,-${window.innerWidth*(this.zoom-1)}px)`
			"transform": `scale(${1/this.zoom})`
			// "transform": `perspective(${window.innerWidth}px) translate3d(0,0,-${window.innerWidth/2*this.zoom}px)`
		})
	}

	update() {
		if(this.zoomObject && this.zoomEnabled) {
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