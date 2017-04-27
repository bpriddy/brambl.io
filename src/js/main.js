'use strict';

import events from 'backbone-events-standalone';
import DataManager from './datamanager.js';
import Script from './script.js';


let datamanager = null;
let script = null;
let $appEl = null;

$(() => {
	
	$appEl = $("#app");
	datamanager = new DataManager({
		events: events
	})
	loadScript(5); //simplified = 5

	function loadScript(scriptID) {
		datamanager.load("/api/script?scriptID="+scriptID)
			.then((data) => {
				script = new Script({
					content: {
						data: data
					},
					id: scriptID,
					$parent: $appEl,
					events: events
				})
			})
	}

})


