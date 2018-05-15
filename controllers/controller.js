
var mongoose = require('mongoose'),
  Note = mongoose.model('Notes');

exports.list_all_notes = function(req, res) {
  Note.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_note = function(req, res) {
  var new_task = new Note(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_note = function(req, res) {
  Note.findById(req.params.noteId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_note = function(req, res) {
  Note.findOneAndUpdate({_id: req.params.noteId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_note = function(req, res) {
  Note.remove({
    _id: req.params.noteId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Note successfully deleted' });
  });
};
