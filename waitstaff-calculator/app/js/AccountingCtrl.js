angular.module('waitStaffApp')
  .controller('AccountingCtrl', function($scope, meals){
    $scope.meals = meals.all();
  })
