// app/controllers/contato.js
module.exports = function(app) {

  var Device = app.models.device;

  var controller = {};

  controller.getDevices = function(req, res) {
    Device.find().populate('deviceType').exec()
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
    var _id = req.params.id;
    Device.findById(_id).exec()
    .then(
      function(device) {
        if (!device) throw new Error("Device not found");
        res.json(device) ;
      },
      function(error) {
        console.log(error);
        res.status(404).json(error);
      }
    );
  };

  controller.deleteDevice = function(req, res) {
    var _id = req.params.id;
    Device.remove({"_id" : _id}).exec()
    .then(
      function() {
        res.status(204).end();
      },
      function(error) {
        return console.error(error);
      }
    );
  };

  controller.saveDevice = function(req, res) {
    var _id = req.body._id;

    req.body.deviceType = req.body.deviceType || null;

    if(_id) {
      Device.findByIdAndUpdate(_id, req.body).exec()
      .then(
        function(device) {
          res.json(device);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      );
    } else {
      Device.create(req.body)
      .then(
        function(device) {
          res.status(201).json(device);
        },
        function(error) {
          console.log(error);
          res.status(500).json(error);
        }
      );
    }
  };

  return controller;
};
