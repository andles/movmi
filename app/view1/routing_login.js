
angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    template: '<m-login></m-login>'
  });
}])