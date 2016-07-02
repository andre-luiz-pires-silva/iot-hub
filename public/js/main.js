angular.module('iot', ['ngRoute'])
  .config(function($routeProvider) {

    $routeProvider.when('/devices', {
      templateUrl: 'partials/devices.html',
      controller: 'DevicesController'
    });

    $routeProvider.when('/device/:deviceId', {
      templateUrl: 'partials/device.html',
      controller: 'DeviceController'
    });

    $routeProvider.otherwise({redirectTo: '/devices'});

});
