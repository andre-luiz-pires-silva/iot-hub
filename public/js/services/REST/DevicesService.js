angular.module('iot').factory('Device', function($resource) {
    return $resource('/devices/:id');
});
