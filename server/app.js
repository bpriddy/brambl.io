const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const router = express.Router()

const api = require('./api');
app.use('/api', api);
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cookieParser())

var CDN = path.join(__dirname, '/../build');
app.use('/assets', express.static( CDN ))


app.listen( 3000 );


app.get('/', 
	(req, res) => {
		res.render('index', {
			CDN: '/assets',
			data: {}
		});
	}
)
