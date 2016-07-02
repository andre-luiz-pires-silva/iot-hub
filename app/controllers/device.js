// app/controllers/contato.js

var devices = [
  {_id: 1, ip: '192.168.1.1', name: 'Device 1'},
  {_id: 2, ip: '192.168.1.2', name: 'Device 2'},
  {_id: 3, ip: '192.168.1.3', name: 'Device 3'}
];

module.exports = function() {
  var controller = {};

  controller.getDevices = function(req, res) {
    res.json(devices);
  };

  controller.getDevice = function(req, res) {
    var id = req.params.id;
    console.log("Get Device #" + id);

    var device = devices.filter(function(device){
      return device._id == id;
    })[0];

    device ?
      res.json(device) :
      res.status(404).send('Device not found');
  }


  return controller;
};
