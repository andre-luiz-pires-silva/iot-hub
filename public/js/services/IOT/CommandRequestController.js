angular.module('iot').factory('CommandRequestController', function($resource, $http) {

  return {

    sendCommand: function(command, finishedCallback, errorCallback) {

      var header = {'key1' : 'value1'};
      header.key2 = 'value2';
      command.httpHeader = header;

      $http({method: command.httpVerb, url: command.device.ip + command.httpPath,
        headers: command.httpHeader, data: command.httpBody})

        // .success(finishedCallback)
        // .error(errorCallback);

        // .then(function successCakkback(response){
        //   console.log(response);
        // }, function errorCallback(response){
        //   console.log(response);
        // });

        .then(finishedCallback, errorCallback);

      // var CommandResource = $resource(command.device.ip + command.httpPath);
      // CommandResource.query(finishedCallback, errorCallback);
    }
  };
});
