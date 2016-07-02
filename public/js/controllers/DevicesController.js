angular.module('iot').controller('DevicesController',
  function($scope, $http) {

  $scope.filtro = '';
  $scope.devices = [];

/*
  $scope.devices = [
    {_id: 1, ip: '192.168.1.1', name: 'Device 1'},
    {_id: 2, ip: '192.168.1.2', name: 'Device 2'},
    {_id: 3, ip: '192.168.1.3', name: 'Device 3'}
  ];
  */

  $http.get('/devices')
  .success(function(data, status, headers, config) {
    $scope.devices = data;
  })
  .error(function(statusText) {
    console.log("Não foi possível obter a lista de Equipamentos");
    console.log(statusText);
  });
});
