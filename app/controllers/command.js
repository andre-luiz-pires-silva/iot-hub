module.exports = function(app) {

  var Command = app.models.command;

  var controller = {};

  controller.getCommands = function(req, res) {
    Command.find().exec()
    .then(
      function(commands) {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(commands);
      },
      function(error) {
        console.error(error);
        res.status(500).json(error);
      }
    );
  };

  controller.getCommand = function(req, res) {
    var _id = req.params.id;
    Command.findById(_id).populate('device').exec()
    .then(
      function(command) {
        if (!command) throw new Error("Command not found");

        // Cors
        res.header("Access-Control-Allow-Origin", "*");

        res.json(command) ;
      },
      function(error) {
        console.log(error);
        res.status(404).json(error);
      }
    );
  };

  controller.getCommandsByDeviceId = function(req, res) {
    var deviceId = req.params.deviceId;
    Command.find({device:deviceId}).exec()
    .then(
      function(commands) {
        res.json(commands);
      },
      function(error) {
        console.error(error);
        res.status(500).json(error);
      }
    );
  };

  controller.saveCommand = function(req, res) {
    var _id = req.body._id;

    req.body.device = req.body.device || null;

    if(_id) {
      Command.findByIdAndUpdate(_id, req.body).exec()
      .then(
        function(command) {
          res.json(command);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      );
    } else {
      Command.create(req.body)
      .then(
        function(command) {
          res.status(201).json(command);
        },
        function(error) {
          console.log(error);
          res.status(500).json(error);
        }
      );
    }
  };

  controller.deleteCommand = function(req, res) {
    var _id = req.params.id;
    Command.remove({"_id" : _id}).exec()
    .then(
      function() {
        res.status(204).end();
      },
      function(error) {
        return console.error(error);
      }
    );
  };

  return controller;
};
