angular.module('movieCalc', [])
  .controller('MovieController', function($scope) {
    $scope.movie = {
      name: '',
      ticketPrice: ''
    }

    $scope.movies = [];

    $scope.submit = function() {
      var currMovie = angular.copy($scope.movie);
      $scope.movies.push(currMovie);
      $scope.movie = {};
      showSpending();
    }

    function sumTickets() {
      var ticketTotal = 0;
      for (var i = 0; i < $scope.movies.length; i++) {
        ticketTotal += $scope.movies[i].ticketPrice;
      }
      return ticketTotal;
    }

    function showSpending() {
      $scope.spendings = {
        total: 0
      }

      $scope.spendings.total = sumTickets($scope.movies);
    }

    $scope.reset = function() {
      $scope.movies = [];
      $scope.spendings.total = {};
    }
  });
