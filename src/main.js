'use strict';

import TextNode from './js/textnode.js';
import Lines from './js/lines.js';
import ZoomAndPan from './js/zoomandpan.js';
import ControlPanel from './js/controlpanel.js';
import DataManager from './js/datamanager.js';

import scriptEl from './pug/script.pug';

import events from 'backbone-events-standalone';

let script = {};
let lines = null;
const nodes = {};
let $scriptContainer = null;
let $appEl = null;
let zoomandpan = null;
let controlpanel = null;
let datamanager = null;

const zoom = 1

$(() => {
	$scriptContainer = $(scriptEl());
	$appEl = $("#app");
	$appEl.append($scriptContainer)
	$.get("/api/script", (resp) => {
		script = JSON.parse(resp.response);
		// console.log(script[script.length - 1].position)
		makeNodes(script)
	})

})


function makeNodes(script) {

	datamanager = new DataManager({
		events: events
	})

	zoomandpan = new ZoomAndPan({
		parent: $scriptContainer.find(".stage")[0], 
		zoom: zoom,
		dampingFactor: 0.9,
		minZoom: 1,
		maxZoom: 20,
		zoomSpeed: 2,
		limitZoom: true,
		excludedClasses: ['node'],
		events: events
	})


	script.forEach((node) => {
		// console.log(node.label)
		nodes[node.id] = new TextNode({
			data: node,
			zoomandpan: zoomandpan,
			$appEl: $appEl,
			$container: zoomandpan.$panner,
			events: events
		});
	})

	lines = new Lines({
		nodes: nodes,
		$parent: zoomandpan.$panner,
		events: events
	})

	controlpanel = new ControlPanel({
		$parent: $scriptContainer.find(".control-panel"),
		events: events
	})

}


