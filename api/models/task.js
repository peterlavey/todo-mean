'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  nombre: {type:String}
});

module.exports=mongoose.model('Task', taskSchema);
