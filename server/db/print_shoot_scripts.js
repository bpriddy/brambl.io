const fs = require("fs");
const script = require("./script_4_1_map.js");

let map = script.map

let branches = {
	nick: [],
	dan: [],
	gary: [],
	claire: []
}

var shootScript = "";



function createBranch(node) {
	// console.log('-----------BRANCH START-------------')
	// console.log(node.text)
	// shootScript += ""
	if(node.label === "ending") return;

	var chunk = {
		lines: [],
		incoming: []
	}
	node.incoming.forEach((idx) => {
		chunk.incoming.push(map[idx].label + ": "+map[idx].text);
	})
	recurse(node);
	function recurse(n) {
		// console.log(n.text)
		var txt = n.text;
		if(n.label === "ending") txt = "ending: "+txt
		chunk.lines.push(txt);
		var matched = false;
		n.outgoing.forEach((idx) => {
			if(n.label === map[idx].label || map[idx].label === "ending") {
				recurse(map[idx])
				matched = true;
			}
		})
		if(!matched) branches[node.label].push(chunk);
	}

}

Object.keys(map).forEach((node) => {
	var matched = false;
	// console.log(node)
	map[node].incoming.forEach((idx) => {
		if(map[idx].label === map[node].label) {
			matched = true;
		}
	})
	if(!matched) createBranch(map[node]);

})

Object.keys(branches).forEach((name) => {
	shootScript += "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n==============================\n";
	shootScript += name.toUpperCase()+"\n";
	shootScript += "==============================\n\n\n";
	branches[name].forEach((node, idx) => {
		shootScript += idx+".\n\n";
		shootScript += "incoming: \n\n";
		shootScript += node.incoming.join("\n")+"\n\n";
		shootScript += "lines: \n\n";
		shootScript += node.lines.join("\n\n")+"\n\n";
		shootScript += "--------------------------\n";
		// console.log(node)
	})
})

console.log(shootScript)

fs.writeFile('shooScript_4_1.txt', shootScript, 'utf8', () => {
	console.log('SUCCESS');
});

