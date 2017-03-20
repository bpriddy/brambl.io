
'use strict';
const bodyParser = require('body-parser')

var app = require("./app");
var express = require('express');
var router = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var script = require("./db/script_4_1.js");

router.get('/script/', 
	(req, res) => {
		let db = app.get("db");
		// db.collection('nodes').insert(script.script)
		db.collection('nodes').find().toArray(function (err, result) {
			if (err) throw err
			let obj = {
				response: JSON.stringify(result)
			}
			
			res.send(obj); 

		})
		
	}
)

router.post('/script/update',
	(req, res) => {
		let db = app.get("db");
		let data = JSON.parse(req.body.changed);
		// console.log(data)
		update(0)
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

		let toDelete = JSON.parse(req.body.deleted);
		if(toDelete.length) remove(0);
		function remove(idx) {
			let query = {
				id: toDelete[idx]
			}
			toDelete.shift();
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