angular.module('iot').controller('DevicesController', function($scope) {

  $scope.total = 0;
  $scope.filtro = '';

  $scope.incrementa = function() {
    $scope.total++;
  };

  $scope.devices = [
    {_id: 1, ip: '192.168.1.1', name: 'Device 1'},
    {_id: 2, ip: '192.168.1.2', name: 'Device 2'},
    {_id: 3, ip: '192.168.1.3', name: 'Device 3'}
  ];

});
