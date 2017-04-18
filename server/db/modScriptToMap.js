var fs = require("fs");

var script = require("./script_simplified_1.js");
var destMap = {};
script.script.forEach((node) => {
	destMap[node.id] = node
})

// console.log(destMap)

fs.writeFile('script_simplified_1_map.js', "module.exports = "+JSON.stringify({map: destMap}), 'utf8', () => {
	console.log('SUCCESS');
});