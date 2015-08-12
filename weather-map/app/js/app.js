var app = angular.module('weatherMap', ['ngRoute'])
  .value('appCities', ['New York', 'Dallas', 'Chicago'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'HomeCtrl'
    })
    .when('/cities/:city', {
      templateUrl : 'city.html',
      controller : 'CityCtrl',
      resolve : {
        city: function(appCities, $route, $location) {
          var city = $route.current.params.city;
          if(appCities.indexOf(city) == -1 ) {
            $location.path('/error');
            return;
          }
          return city;
        }
      }
    })
    .when('/error', {
      template : '<p>Error - Page Not Found</p>'
    });
  }])
  .controller('HomeCtrl', function($scope) {
    //empty for now
  })
  .controller('CityCtrl', function($scope, city) {
    $scope.city = city;
  });
