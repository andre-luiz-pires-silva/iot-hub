  angular.module('iot').controller('CommandController',
  function($scope, $routeParams, $location, Device, Command) {

    $scope.device = null;
    $scope.command = null;
    $scope.requestVerbs = ['GET', 'POST', 'PUT', 'DELETE'];

    var commandId = $routeParams.commandId;
    var deviceId = $routeParams.deviceId;

    if(commandId) {
      Command.get({id: commandId},
        function(command) {
          $scope.command = command;
          $scope.device = command.device;
          console.log('Command: ' + $scope.command.name + ', Device: ' + $scope.device.name);
        },
        function(erro) {
          console.log(erro);
        }
      );

    } else if(deviceId) {
      Device.get({id: deviceId},
        function(device) {
          $scope.device = device;
          $scope.command = new Command();
          console.log('Device: ' + device.name);
        },
        function(erro) {
          console.log(erro);
        }
      );
    }

    $scope.save = function() {
      $scope.command.device = $scope.device._id;
      $scope.command.$save()
        .then(function() {
          $location.path('/device/' + $scope.device._id);
        })
        .catch(function(erro){
          console.log(erro);
        });
    };

    $scope.delete = function(command) {
      Command.delete({id: command._id},
        function() {
          $location.path('/device/' + $scope.device._id);
        },
        function(erro) {
          console.log(erro);
        }
      );
    };

  });
