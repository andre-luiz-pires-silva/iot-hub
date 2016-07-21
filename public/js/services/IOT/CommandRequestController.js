angular.module('iot').factory('CommandRequestController', function($resource, $http) {

  return {

    sendCommand: function(command, finishedCallback, errorCallback) {

      var parameters = {method: command.httpVerb, url: command.device.ip + command.httpPath};
      if(command.httpHeader) {
        parameters.headers = command.httpHeader;
      }
      if(command.httpBody) {
        parameters.data = command.httpBo
      }

      $http(parameters).then(finishedCallback, errorCallback);
    }
  };
});
