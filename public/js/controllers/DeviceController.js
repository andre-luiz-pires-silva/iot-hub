  angular.module('iot').controller('DeviceController',
  function($scope, $routeParams, $resource) {

    var Device = $resource('/devices/:id');

    if($routeParams.deviceId) {
      Device.get({id: $routeParams.deviceId},
        function(device) {
          $scope.device = device;
        },
        function(erro) {
          $scope.mensagem = {
            texto: 'Não foi possível obter o Device.'
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
          $scope.mensagem = {texto: 'Salvo com sucesso'};
          $scope.device = new Device();
        })
        .catch(function(erro){
          $scope.mensagem = {texto: 'Não foi possível salvar'};
          console.log(erro);
        });
    };  

  });
