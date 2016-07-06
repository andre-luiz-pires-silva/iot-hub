angular.module('iot').controller('DevicesController',
  function($scope, $resource, Device) {

  $scope.filtro = '';
  $scope.devices = [];
  $scope.message = {'text': ''};

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
  }

  $scope.delete = function(device) {    
    Device.delete({id: device._id},
      getDevices,
      function(erro) {
        $scope.message = {text: 'Não foi possível remover o contato'};
        console.log(erro);
      }
    );
  };

  getDevices();

});
