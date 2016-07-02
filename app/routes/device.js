// app/routes/device.js
module.exports = function(app) {
  var controller = app.controllers.device;
  app.get('/devices', controller.getDevices);
  app.get('/devices/:id', controller.getDevice);
};
