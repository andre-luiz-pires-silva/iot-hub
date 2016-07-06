  angular.module('iot').controller('DeviceController',
  function($scope, $routeParams, $location, Device, DeviceType) {

    DeviceType.query(function(deviceTypes) {
      $scope.deviceTypes = deviceTypes;
    });

    if($routeParams.deviceId) {
      Device.get({id: $routeParams.deviceId},
        function(device) {
          $scope.device = device;
        },
        function(erro) {
          $scope.message = {
            text: 'Não foi possível obter o Device.'
          };
          console.log(erro);
        }
      );
    } else {
      $scope.device = new Device();
    }

    $scope.save = function() {
      $scope.device.$save()
        .then(function() {
          $location.path('/devices');
          $scope.device = new Device();
        })
        .catch(function(erro){
          $scope.message = {text: 'Não foi possível salvar'};
          console.log(erro);
        });
    };

    $scope.delete = function(device) {
      Device.delete({id: device._id},
        function() {
          $location.path('/devices');
        },
        function(erro) {
          $scope.message = {text: 'Não foi possível remover o contato'};
          console.log(erro);
        }
      );
    };

  });
