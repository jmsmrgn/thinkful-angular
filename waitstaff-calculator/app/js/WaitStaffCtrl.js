angular.module('waitStaffApp')
  .controller('WaitStaffCtrl', function($scope, meals) {
    $scope.meal = {
      basePrice: '',
      taxRate: '',
      tipPerc: ''
    }
    $scope.meals = [];

    $scope.currCustCharge = {
      subtotal: 0,
      tip: 0,
      total: 0
    }
    $scope.currCustCharges = [];

    $scope.earnings = {
      tipTotal: 0,
      mealCount: 0,
      avgTip: 0
    }
    $scope.earningsTotals = [];

    $scope.submit = function() {
      var currMeal = angular.copy($scope.meal);

      $scope.meal = {};

      meals.add(currMeal);

      $scope.currCustCharge = meals.calcCharges(currMeal);

      calcEarnings($scope.meals, $scope.currCustCharges);
    }

    function calcTips(currCustCharges) {
      var tipTotal = 0;
      for (var i = 0; i < currCustCharges.length; i++) {
        tipTotal += currCustCharges[i].tip;
      }
      return tipTotal;
    }

    function calcEarnings(meals, currCustCharges) {
      $scope.earnings.tipTotal = calcTips(currCustCharges);
      $scope.earnings.mealCount = meals.length;
      $scope.earnings.avgTip = $scope.earnings.tipTotal / $scope.earnings.mealCount;
    }

    function resetAll() {
      $scope.meal = {
        basePrice: 0,
        taxRate: 0,
        tipPerc: 0
      }
      submit();
    }
  });