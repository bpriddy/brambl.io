'use strict';

import dogs from './pug/test.pug';

let script = {};

$(() => {
	$.get("/api/script", (resp) => {
		script = JSON.parse(resp.response);
		makeNodes(script)
	})
})


function makeNodes(script) {
	script.forEach((node) => {
		console.log(node.color)
	})
}


