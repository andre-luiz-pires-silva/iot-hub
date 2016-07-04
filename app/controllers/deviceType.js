// app/controllers/contato.js
module.exports = function(app) {

  var DeviceType = app.models.deviceType;

  var controller = {};

  controller.getDeviceTypes = function(req, res) {
    DeviceType.find().exec()
    .then(
      function(deviceTypes) {
        res.json(deviceTypes);
      },
      function(error) {
        console.error(error);
        res.status(500).json(error);
      }
    );
  };

  controller.getDeviceType = function(req, res) {
    var _id = req.params.id;
    DeviceType.findById(_id).exec()
    .then(
      function(deviceType) {
        if (!deviceType) throw new Error("Device Type not found");
        res.json(deviceType) ;
      },
      function(error) {
        console.log(error);
        res.status(404).json(error);
      }
    );
  };

  return controller;
};
