
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
		// console.log(data[0]._id)
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


		// db.collection('nodes').update(query, update, {w:1, multi: true}, (err, result) => {
		// 	if (err) throw err
		// 	var obj = {
		// 		response: JSON.stringify(result)
		// 	}
			
		// 	res.send(obj);
		// });

	}

)


module.exports = router;