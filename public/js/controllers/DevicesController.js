angular.module('iot').controller('DevicesController',
  function($scope, $resource) {

  $scope.filtro = '';
  $scope.devices = [];
  var Device = $resource('/devices/:id');

  function getDevices() {
    Device.query(
      function(devices) {
        $scope.devices = devices;
      },
      function(erro) {
        console.log("Não foi possível obter a lista de equipamentos");
        console.log(erro);
      }
    );
  }
  getDevices();
});
