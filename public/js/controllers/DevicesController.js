angular.module('iot').controller('DevicesController',
  function($scope, $resource) {

  $scope.filtro = '';
  $scope.devices = [];
  $scope.mensagem = {texto: ''};
  var Device = $resource('/devices/:id');

  function getDevices() {
    Device.query(
      function(devices) {
        $scope.devices = devices;
        $scope.mensagem = {};
      },
      function(erro) {
        $scope.mensagem = {texto: 'Não foi possível obter a lista'};
        console.log(erro);
      }
    );
  }

  $scope.delete = function(device) {
    Device.delete({id: device._id},
      getDevices,
      function(erro) {
        $scope.mensagem = {texto: 'Não foi possível remover o contato'};
        console.log(erro);
      }
    );
  };

  getDevices();

});
