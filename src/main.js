'use strict';

import events from 'backbone-events-standalone';
import DataManager from './js/datamanager.js';
import Script from './js/script.js';


let datamanager = null;
let script = null;
let $appEl = null;

$(() => {
	
	$appEl = $("#app");
	datamanager = new DataManager({
		events: events
	})
	loadScript(4.1);

	function loadScript(scriptID) {
		script = new Script({
			id: scriptID,
			$parent: $appEl,
			events: events,
			datamanager: datamanager
		})
	}

})


