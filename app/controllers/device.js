module.exports = function(app) {

  var Device = app.models.device;
  var sanitize = require('mongo-sanitize');

  var controller = {};

  controller.saveDevice = function(req, res) {
    var userId = req.user._id;

    var device = {};
    if(req.body._id) {
      device._id = req.body._id;
    }
    device.user = userId;
    device.ip = req.body.ip;
    device.name = req.body.name;
    device.description = req.body.description || null;

    if(device._id) {
      Device.findByIdAndUpdate(device._id, device).exec()
      .then(
        function(savedDevice) {
          res.json(savedDevice);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      );
    } else {
      Device.create(device)
      .then(
        function(savedDevice) {
          res.status(201).json(savedDevice);
        },
        function(error) {
          console.log(error);
          res.status(500).json(error);
        }
      );
    }
  };

  controller.deleteDevice = function(req, res) {
    var userId = req.user._id;
    var deviceId = sanitize(req.params.id);

    Device.remove({_id:deviceId, user:userId}).exec()
    .then(
      function() {
        res.status(204).end();
      },
      function(error) {
        return console.error(error);
      }
    );
  };

  controller.getDevices = function(req, res) {
    var userId = req.user._id;

    Device.find({user:userId}).exec()
    .then(
      function(devices) {
        res.json(devices);
      },
      function(error) {
        console.error(error);
        res.status(500).json(error);
      }
    );
  };

  controller.getDevice = function(req, res) {
    var userId = req.user._id;
    var deviceId = req.params.id;

    Device.findOne({_id:deviceId, user:userId}).exec()
    .then(
      function(device) {
        if (!device) throw new Error("Device not found");

        // Cors
        res.header("Access-Control-Allow-Origin", "*");

        res.json(device) ;
      },
      function(error) {
        console.log(error);
        res.status(404).json(error);
      }
    );
  };

  return controller;
};
