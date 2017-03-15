'use strict';

import container from './pug/script.pug';
import Node from './js/textnode.js'
import ZoomAndPan from './js/zoomandpan.js'

let script = {};
const nodes = [];
let $scriptContainer = null;
let $appEl = null;
let zoomandpan = null;

const zoom = 4

$(() => {
	$scriptContainer = $(container());
	$appEl = $("#app");
	$appEl.append($scriptContainer)
	$.get("/api/script", (resp) => {
		script = JSON.parse(resp.response);
		makeNodes(script)
	})

})


function makeNodes(script) {
	// console.log(script)

	zoomandpan = new ZoomAndPan({
		el: $appEl[0], 
		zoom: zoom,
		container: $scriptContainer,
		dampingFactor: 0.9,
		// rotateSpeed: 5,
		// maxPhi: 0.2,
		// minZoom: 45,
		minZoom: 1,
		maxZoom: 4,
		// maxZoom: 10000,
		zoomObject: $scriptContainer,
		zoomSpeed: 2,
		limitZoom: true,
		excludedClasses: ['node']
	})


	script.forEach((node) => {
		// console.log(node.label)
		nodes.push(new Node({
			data: node,
			zoomandpan: zoomandpan,
			$appEl: $appEl,
			$container: $scriptContainer
		}))
	})

}


