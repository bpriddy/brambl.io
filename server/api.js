
'use strict';

var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost/brambl_test';

var script = require("./db/script_4_1.json");


router.get('/script/', 
	(req, res) => {
		
		// script.forEach((node) => {
		// 	node.script = 4
		// });

		// console.log(script)

		MongoClient.connect(url, function (err, db) {
			if (err) throw err

			// db.collection('nodes').insert(script)


			db.collection('nodes').find().toArray(function (err, result) {
				if (err) throw err
				var obj = {
					response: JSON.stringify(result)
				}
				
				res.send(obj);

			})
			
		})

	}
)


module.exports = router;