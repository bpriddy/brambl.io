
'use strict';
const bodyParser = require('body-parser')

var app = require("./app");
var express = require('express');
var router = express.Router();

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
			.then((retObj) => {
				let obj = {
					response: JSON.stringify(retObj)
				}
				res.send(obj);
			})
		
		
	}
)

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
			resolve({
				nodes: obj,
				script: sObj
			}); 

		})
	})
}

router.post('/script/update',
	(req, res) => {
		let db = app.get("db");
		let data = JSON.parse(req.body.changed);
		// console.log(data)
		if(data.length) update(0);
		function update(idx) {
			let query = {
				id: data[idx].id
			}
			delete data[idx]._id;
			
			db.collection('nodes').update(query, data[idx], {w:1}, (err, result) => {
				if (err) throw err;
				
				if(idx<data.length-1) {
					idx++;
					update(idx);
				} else {
					
					res.send("success");

				}
			});

		}

		let toDelete = (req.body.deleted) ? JSON.parse(req.body.deleted) : undefined;
		if(toDelete) remove(0);
		function remove(idx) {
			let query = {
				id: toDelete[idx]
			}
			toDelete.shift();
			// console.log("remove", query);
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

	}

)

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