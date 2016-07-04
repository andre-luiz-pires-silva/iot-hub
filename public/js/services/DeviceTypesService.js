angular.module('iot').factory('DeviceType', function($resource) {
    return $resource('/deviceTypes/:id');
});
