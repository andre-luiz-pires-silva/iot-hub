angular.module('iot').controller('DevicesController',
  function($scope, $resource, Device, SwitchController) {

  $scope.devices = [];
  $scope.switchesStatus = [];

  $scope.changeStatus = function(device) {
    device.loading = true;
    device.message = 'Enviando comando...';
    var deviceStatus = $scope.switchesStatus[device._id];
    SwitchController.setSwitchState(device, deviceStatus, function(success) {
      device.loading = false;
      if(success)
        device.message = 'Sucesso';
      else
        device.message = 'Erro';
    });
  };

  $scope.getData = function(device) {
    device.loading = true;
    console.log('Get Data: ' + device._id);
    var deviceStatus = $scope.switchesStatus[device._id];
    SwitchController.setSwitchState(device, deviceStatus, function() {
      device.loading = false;
    });
  };

  function getDevices() {
    Device.query(
      function(devices) {
        $scope.devices = devices;
        $scope.message = {};
      },
      function(erro) {
        $scope.message = {text: 'Não foi possível obter a lista'};
        console.log(erro);
      }
    );
  };

  getDevices();

});
