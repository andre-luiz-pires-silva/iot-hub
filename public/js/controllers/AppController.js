angular.module('iot').controller('AppController', function($scope, $mdSidenav, $location) {

  /**
   * Hide or Show the 'left' sideNav area
   */
  $scope.toggle = function() {
    $mdSidenav('left').toggle();
  };

  $scope.openDevice = function ( device ) {
    $location.path( '/device/' + device._id );
  };

});
