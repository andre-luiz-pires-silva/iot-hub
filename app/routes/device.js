module.exports = function(app) {

  var controller = app.controllers.device;
  var authController = app.controllers.auth;

  app.route('/devices')
    .get(authController.checkAuth, controller.getDevices)
    .post(authController.checkAuth, controller.saveDevice);

  app.route('/devices/:id')
    .get(authController.checkAuth, controller.getDevice)
    .delete(authController.checkAuth, controller.deleteDevice);

};
