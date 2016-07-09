angular.module('iot').factory('SwitchController', function($resource) {
  return {

    setSwitchState: function(device, status, finishedCallBack) {
      var SwitchDevice = $resource('http://' + device.ip);
      SwitchDevice.get(
        function(result) {
          console.log('Result: ' + JSON.stringify(result));
          finishedCallBack(true);
        },
        function(error) {
          console.log('Error: ' + JSON.stringify(error));
          finishedCallBack(false);
        }
      );

      console.log('Change Status: ' + device._id + ' status: ' + status);
    }

  };
});
