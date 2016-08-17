module.exports = function(app) {

  var Command = app.models.command;
  var sanitize = require('mongo-sanitize');

  var controller = {};

  controller.saveCommand = function(req, res) {
    var userId = req.user._id;

    var command = {};
    if(req.body._id) {
      command._id = req.body._id;
    }
    command.name = req.body.name;
    command.httpVerb = req.body.httpVerb;
    command.httpPath = req.body.httpPath;
    command.httpHeader = req.body.httpHeader;
    command.httpBody = req.body.httpBody;
    command.device = req.body.device;
    command.user = userId;

    if(command._id) {
      Command.findByIdAndUpdate(command._id, command).exec()
      .then(
        function(savedCommand) {
          res.json(savedCommand);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      );
    } else {
      Command.create(command)
      .then(
        function(savedCommand) {
          res.status(201).json(savedCommand);
        },
        function(error) {
          console.log(error);
          res.status(500).json(error);
        }
      );
    }
  };

  controller.deleteCommand = function(req, res) {
    var userId = req.user._id;
    var commandId = sanitize(req.params.id);

    Command.remove({_id:commandId, user:userId}).exec()
    .then(
      function() {
        res.status(204).end();
      },
      function(error) {
        return console.error(error);
      }
    );
  };

  controller.getCommandsByDeviceId = function(req, res) {
    var userId = req.user._id;
    var deviceId = req.params.deviceId;

    Command.find({user:userId, device:deviceId}).exec()
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

  controller.getCommand = function(req, res) {
    var userId = req.user._id;
    var commandId = req.params.id;

    Command.findOne({user:userId, _id:commandId}).populate('device').exec()
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

  return controller;
};
