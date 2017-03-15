'use strict';

import Node from './js/textnode.js'
import ZoomAndPan from './js/zoomandpan.js'

import scriptEl from './pug/script.pug';

let script = {};
const nodes = [];
let $scriptContainer = null;
let $appEl = null;
let zoomandpan = null;

const zoom = 1

$(() => {
	$scriptContainer = $(scriptEl());
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
		parent: $scriptContainer[0], 
		zoom: zoom,
		dampingFactor: 0.9,
		minZoom: 1,
		maxZoom: 5,
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
			$container: zoomandpan.$panner
		}))
	})

}


