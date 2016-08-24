describe("CommandController", function() {

  var $scope, $httpBackend;

  beforeEach(function() {
    module('iot');

    inject(function($injector, _$httpBackend_) {
      $scope = $injector.get('$rootScope').$new();
      $httpBackend = _$httpBackend_;
      $httpBackend.when('GET', '/commands/1')
        .respond({_id: '1', name: 'commandName', device: {name: 'deviceName'}});
      $httpBackend.when('GET', '/devices/1')
        .respond({_id: '2'});
    });

  });

  it("Deve criar um Command vazio quando nenhum parâmetro de rota for passado",
    inject(function($controller) {
      $controller('CommandController', {"$scope" : $scope});
      expect($scope.command).toBeNull();
  }));

  it("Deve preencher o Command quando o parâmetro de rota for passado",
    inject(function($controller) {
      $controller('CommandController', {"$scope" : $scope, '$routeParams': {commandId: 1}});
      $httpBackend.flush();
      expect($scope.command._id).toBeDefined();
  }));

});
