// app/routes/device.js
module.exports = function(app) {
  var controller = app.controllers.device;

  app.route('/devices')
    .get(controller.getDevices)
    .post(controller.saveDevice);

  app.route('/devices/:id')
    .get(controller.getDevice)
    .delete(controller.deleteDevice);

};
