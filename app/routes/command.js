module.exports = function(app) {

  var controller = app.controllers.command;
  var authController = app.controllers.auth;

  app.route('/commands')
    .post(authController.checkAuth, controller.saveCommand);

  app.route('/commands/:id')
    .get(authController.checkAuth, controller.getCommand)
    .delete(authController.checkAuth, controller.deleteCommand);

  app.route('/commands/device/:deviceId')
    .get(authController.checkAuth, controller.getCommandsByDeviceId);

};
