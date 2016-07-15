  angular.module('iot').controller('DeviceController',
  function($scope, $routeParams, $location, $mdToast, Device, CommandByDevice) {

    var deviceId = $routeParams.deviceId;

    $scope.selectedTab = 0;
    $scope.requestVerbs = ['GET', 'POST', 'PUT', 'DELETE'];

    if(deviceId) {
      CommandByDevice.query({deviceId: deviceId}, function(commands) {
        $scope.commands = commands;
      });

      Device.get({id: deviceId},
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
      var isNew = !$scope.device._id;

      $scope.device.$save()
        .then(function() {
          $mdToast.show($mdToast.simple().textContent('Device cadastrado com sucesso!').position('top'));
          if(isNew) {
            $scope.selectedTab = 1;
          }
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

    $scope.sendCommand = function() {
      console.log('Send Command');
    }

  });
