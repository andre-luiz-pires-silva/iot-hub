module.exports = function(app) {
  var controller = app.controllers.command;

  app.route('/commands')
    .get(controller.getCommands)
    .post(controller.saveCommand);

  app.route('/commands/:id')
    .get(controller.getCommand)
    .delete(controller.deleteCommand);

  app.route('/commands/device/:deviceId')
    .get(controller.getCommandsByDeviceId);

};
