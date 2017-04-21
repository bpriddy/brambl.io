
'use strict';
const bodyParser = require('body-parser')

var app = require("./app");
var express = require('express');
var router = express.Router();
var fs = require('fs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var script = require("./db/script_simplified_1.js");

var scriptData = {
	scriptID: 5,
	videoURL: 'parallel_arguments.mp4'
}

router.get('/script/', 
	(req, res) => {
		// console.log(req.query.scriptID)
		// db.collection('nodes').insert(script.script)
		// db.collection('scripts').insert(scriptData)
		getScript(parseInt(req.query.scriptID))
			.then(getNodes)
			.then(getCuepoints)
			.then((retObj) => {
				let obj = {
					response: JSON.stringify(retObj)
				}
				printWebVRReadyJSON(retObj)
				res.send(obj);
			})
		
		
	}
)

function printWebVRReadyJSON(obj) {
	let cuepoints = JSON.parse(obj.cuepoints.response);
	let nodes = JSON.parse(obj.nodes.response);
	let nodeHash = {};
	nodes.forEach((node) => {
		nodeHash[node.id] = node;
	});
	// console.log(nodeHash)
	let cuepointHash = {};
	let cuepointNodeHash = {};
	cuepoints.forEach((cp) => {
		cuepointHash[parseFloat(cp.timestamp).toFixed(2)] = cp;
		cuepointNodeHash[cp.nodeID] = cp;
	});

	let chunks = {
		dan: {},
		gary: {},
		claire: {}
	}

	var currTimeCodes = {
		dan: null,
		gary: null,
		claire: null
	}
	Object.keys(cuepointHash).forEach((key) => {
		let cp = cuepointHash[key];
		let zone = cp.zone;
		let child = false;
		nodeHash[cp.nodeID].incoming.forEach((iid) => {
			if(zone === nodeHash[iid].label) child = true;
		});

		let responses = {
			dan: null,
			gary: null,
			claire: null
		}
		nodeHash[cp.nodeID].outgoing.forEach((oid) => {
			if(
				nodeHash[oid].label !== "nick" &&
				nodeHash[oid].label !== "ending"
			) {
				if(cuepointNodeHash[oid] === undefined)
					console.log(zone, oid, nodeHash[oid].text, cuepointNodeHash[oid]);
				// if(cuepointNodeHash[oid]) {
				// 	let z = cuepointNodeHash[oid].zone;
				// 	let ts = cuepointNodeHash[oid].timestamp.toFixed(2);
				// 	responses[z] = ts;
				// }
			}
			
		});

		// console.log(zone, nodeHash[cp.nodeID].text, responses)
		if(!child) {
			chunks[zone][key] = {responses:{}};
			currTimeCodes[zone] = cp.timestamp.toFixed(2);
			chunks[zone][key].responses[key] = {};
		} else {
			chunks[zone][currTimeCodes[zone]].responses[key] = {};
		}

	});

	// console.log(chunks)


	// console.log(cuepointHash);
}

function getScript(sid) {
	return new Promise((resolve, reject) => {
		let db = app.get("db");
		db.collection('scripts').find({scriptID: sid }).toArray(function (err, result) {
			if (err) reject(err);
			resolve(result[0]); 
		})
	});
}

function getNodes(sObj) {
	return new Promise((resolve, reject) => {
		let db = app.get("db");
		db.collection('nodes').find({scriptID: parseInt(sObj.scriptID) }).toArray(function (err, result) {
			if (err) reject(err);
			let obj = {
				response: JSON.stringify(result)
			}

			// NOTE: UNCOMMENT BELOW TO BACK UP NODES TO FILE
			// fs.writeFile('nodes.bak.txt', obj.response, 'utf8', () => {
			// 	console.log('SUCCESS');
			// });


			resolve({
				nodes: obj,
				script: sObj
			}); 

			

		})
	})
}

function getCuepoints(obj) {
	return new Promise((resolve, reject) => {
		let db = app.get("db");
		db.collection('cuepoints').find({scriptID: parseInt(obj.script.scriptID) }).toArray(function (err, result) {
			if (err) reject(err);
			let resObj = {
				response: JSON.stringify(result)
			}
			obj.cuepoints = resObj;

			// NOTE: UNCOMMENT BELOW TO BACK UP CUEPOINTS TO FILE
			fs.writeFile('cuepoints.bak.txt', resObj.response, 'utf8', () => {
				console.log('SUCCESS');
			});

			resolve(obj);
		})
	})
}

router.post('/cuepoints/add',
	(req, res) => {
		let db = app.get("db");
		let data = JSON.parse(req.body.cp);
		db.collection('cuepoints').insert(data, (err, result) => {
			if(err) throw err;
			res.send('success')
		})
	}

)

router.post('/update',
	(req, res) => {
		updateNodes(req.body)
			.then(updateCuepoints)
			.then((result) => {
				res.send(result)
			})

	}
)

function updateNodes(body) {
	return new Promise((resolve, reject) => {
		let db = app.get("db");
		let nodes = JSON.parse(body.nodes);
		console.log(nodes)
		if(nodes && nodes.length) {
			updateNode(0);
		} else {
			resolve(body);
		}
		function updateNode(idx) {

			nodes[idx].id = parseInt(nodes[idx].id);
			let query = {
				id: nodes[idx].id
			}
			delete nodes[idx]._id;

			db.collection('nodes').update(query, nodes[idx], {w:1}, (err, result) => {
				if (err) reject(err);
				
				if(idx<nodes.length-1) {
					idx++;
					updateNode(idx);
				} else {
					resolve(body);
				}
			});
		}
	});
}

function updateCuepoints(body) {
	return new Promise((resolve, reject) => {
		let db = app.get("db");
		let cuepoints = JSON.parse(body.cuepoints);
		console.log(body.cuepoints)
		if(cuepoints && cuepoints.length) {
			updateCuepoint(0);
		} else {
			resolve("finished");
		}
		function updateCuepoint(idx) {
			let query = {
				id: cuepoints[idx].id
			}
			delete cuepoints[idx]._id;
			
			db.collection('cuepoints').update(query, cuepoints[idx], {w:1}, (err, result) => {
				if (err) throw err;
				
				if(idx<cuepoints.length-1) {
					idx++;
					updateCuepoint(idx);
				} else {
					resolve("success");
				}
			});
		}
	})
}



router.post('/script/delete',
	(req, res) => {
		let db = app.get("db");
		
		let query = {
			id: req.body.id
		}
		console.log(query);
			// db.collection('nodes').remove(query, (err, result) => {
			// 	if (err) throw err;
				
			// 	if(idx<data.length-1) {
			// 		idx++;
			// 		update(idx);
			// 	} else {
			// 		res.send("success");
			// 	}
			// });
		
	}

)

module.exports = router;