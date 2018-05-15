var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NoteSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  content: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});

NoteSchema.pre('save', function preSave(next){
  this.updatedAt(Date.now());
  next();
});

module.exports = mongoose.model('Notes', NoteSchema);
