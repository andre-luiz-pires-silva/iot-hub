angular.module('iot')
.factory('CommandByDevice', function($resource) {
    return $resource('/commands/device/:deviceId');
})
.factory('Command', function($resource) {
    return $resource('/commands/:id');
})

;
