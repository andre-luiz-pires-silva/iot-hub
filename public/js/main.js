angular.module('iot', ['ngRoute', 'ngResource', 'ngMaterial'])
  .config(function($routeProvider, $mdThemingProvider, $mdIconProvider) {

    $routeProvider.when('/devices', {
      templateUrl: 'partials/devices.html',
      controller: 'DevicesController'
    });

    $routeProvider.when('/device/:deviceId', {
      templateUrl: 'partials/device.html',
      controller: 'DeviceController'
    });

    $routeProvider.when('/device', {
      templateUrl: 'partials/device.html',
      controller: 'DeviceController'
    });

    $routeProvider.otherwise({redirectTo: '/devices'});

    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');

});
