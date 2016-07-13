'use strict';
var mongoose = require('mongoose');
var Task = require('../models/task');

exports.getAll=(req, res)=>{
  console.log('GET TASKS');
  Task.find((err, tasks)=>{
    if(err) res.sendStatus(500, err.message);
    console.info('GET SUCCESS!');
    console.log(tasks);
    res.status(200).jsonp(tasks);
  });
};
