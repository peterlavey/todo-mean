'use strict';
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride=require('method-override');
var mongoose = require('mongoose');

var app = express();
var server = http.createServer(app);

//CONFIG
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

//MIDDLEWARE
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested, content-type');

  next();
});


//MODELS
var TaskCtrl=require('./controllers/task');

//ROUTES
var router=express.Router();
var task=express.Router();

task.route('/task')
  .get(TaskCtrl.getAll);

app.use('/api', task);

router.get('/', (req, res)=>res.send('API INDEX'));
app.use(router);



//DATA BASE
mongoose.connect('mongodb://admin:admin@ds021984.mlab.com:21984/todomdb', (err, res)=>{
  if(err) console.error('ERROR: ' + err);
  app.listen(3001, ()=>console.info('Api running on port ' + 3001));
});
