angular.module('iot').controller('DevicesController',
  function($scope, Device) {

  $scope.devices = [];

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
