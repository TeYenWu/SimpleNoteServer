module.exports = function(app) {
  var controller = require('../controllers/controller.js');

  // todoList Routes
  app.route('/notes')
    .get(controller.list_all_notes);

  app.route('/note')
    .post(controller.create_a_note);


  app.route('/notes/:noteId')
    .get(controller.read_a_note)
    .post(controller.update_a_note)
    .delete(controller.delete_a_note);
};
