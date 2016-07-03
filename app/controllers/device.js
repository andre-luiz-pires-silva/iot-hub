// app/controllers/contato.js

var devices = [
  {_id: 1, ip: '192.168.1.1', name: 'Device 1'},
  {_id: 2, ip: '192.168.1.2', name: 'Device 2'},
  {_id: 3, ip: '192.168.1.3', name: 'Device 3'}
];


module.exports = function() {
  var controller = {};
  var ID_DEVICE_INC = 3;

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
  };

  controller.deleteDevice = function(req, res) {
    var deviceId = req.params.id;

    devices = devices.filter(function(device) {
      return device._id != deviceId;
    });

    res.status(204).end();
  };

  controller.saveDevice = function(req, res) {
    console.log('save');
    var device = req.body;

    device = device._id ?
        update(device) :
        add(device);

    res.json(device);
  };

  function add(newDevice) {
    console.log('add');
    newDevice._id = ++ID_DEVICE_INC;
    devices.push(newDevice);
    return newDevice;
  }

  function update(upDevice) {
    console.log('update');
    devices = devices.map(function(device) {
        if(device._id == upDevice._id) {
          device = upDevice;
        }
        return device;
    });
    return upDevice;

  };

  return controller;
};
