  angular.module('iot').controller('DeviceController',
  function($scope, $routeParams, $location, $mdToast, Device, CommandByDevice, CommandRequestController) {

    var deviceId = $routeParams.deviceId;

    $scope.selectedTab = 0;
    $scope.requestVerbs = ['GET', 'POST', 'PUT', 'DELETE'];

    if(deviceId) {
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

      CommandByDevice.query({deviceId: deviceId}, function(commands) {
        $scope.commands = commands;
        $scope.selectedTab = 1;
      });

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

    $scope.sendCommand = function(command) {
      command.device = $scope.device;
      command.loading = true;
      CommandRequestController.sendCommand(command,
        function(response) {
          command.loading = false;
          command.message = 'Sucesso';
          command.error = false;

        }, function(response) {
          command.loading = false;
          command.message = response.status != -1 ? (response.status + ': ' + response.statusText) : 'Erro de Conexão';
          command.error = true;
        }
      );
      console.log('Send Command: ' + command.name);
    }

  });
