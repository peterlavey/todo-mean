'use strict';
var http = require('http');
var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var methodOverride=require('method-override');

const PORT=3000;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/', (req, res)=>res.sendFile('./public/index.html'));

app.listen(PORT);
console.log("Client running on port "+PORT);
