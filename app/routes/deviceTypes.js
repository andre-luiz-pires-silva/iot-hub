// app/routes/deviceTypes.js
module.exports = function(app) {
  var controller = app.controllers.deviceType;

  app.route('/deviceTypes')
    .get(controller.getDeviceTypes);

  app.route('/deviceTypes/:id')
    .get(controller.getDeviceType);

};
