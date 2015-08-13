angular.module('waitStaffApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : 'home.html'
    })
    .when('/new-meal', {
      templateUrl : 'new-meal.html',
      controller : 'WaitStaffCtrl'
    })
    .when('/my-earnings', {
      templateUrl : 'my-earnings.html',
      controller : 'AccountingCtrl'
    })
    .otherwise('/');
  }]);
