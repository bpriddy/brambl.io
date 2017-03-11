var fs = require("fs");

var script = require("./script_1.js");
var colorLabelDict = [

	{color: 'rgb(169, 169, 169)',
	label: 'ending'},

	{color: 'rgb(132, 128, 0)',
	label: 'dan'},

	{color: 'rgb(0, 132, 44)',
	label: 'nick'},

	{color: 'rgb(0, 110, 132)',
	label: 'claire'},

	{color: 'rgb(132, 0, 0)',
	label: 'gary'},

	{color: 'rgb(214, 0, 0)',
	label: 'gary'},

	{color: 'rgb(214, 207, 0)',
	label: 'dan'},

	{color: 'rgb(255, 255, 102)',
	label: 'dan'},

	{color: 'rgb(255, 0, 0)',
	label: 'gary'},

	{color: 'rgb(107, 255, 156)',
	label: 'nick'},

	{color: 'rgb(107, 230, 255)',
	label: 'claire'},
	
	{color: 'rgb(66, 255, 129)',
	label: 'nick'},

	{color: 'rgb(255, 250, 107)',
	label: 'dan'},
	
	{color: 'rgb(0, 173, 57)',
	label: 'nick'},

	{color: 'rgb(66, 223, 255)',
	label: 'claire'},

	{color: 'rgb(255, 255, 255)',
	label: 'dan'},

	{color: 'rgb(0, 144, 173)',
	label: 'claire'},

	{color: 'rgb(0, 255, 85)',
	label: 'nick'},

	{color: 'rgb(0, 178, 214)',
	label: 'claire'},
	
]

script.forEach((node) => {
	
	let matched = false;
	colorLabelDict.forEach((entry) => {
		if(node.color === entry.color) {
			node.label = entry.label
			matched = true;
		 	delete node.color;
		 	node.scriptID = 1;
		}
	})

})

// console.log(script)

fs.writeFile('script_1.json', "module.exports = "+JSON.stringify({script: script}), 'utf8', () => {
	console.log('SUCCESS');
});

