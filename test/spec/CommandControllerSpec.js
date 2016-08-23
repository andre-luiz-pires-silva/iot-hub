describe("CommandController", function() {

  var $scope;

  beforeEach(function() {
    module('iot');

    inject(function($injector) {
      $scope = $injector.get('$rootScope').$new();
    });

  });

  it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado",
    inject(function($controller) {
      $controller('CommandController', {"$scope" : $scope});
      expect($scope.command).toBeNull();
  }));

});
