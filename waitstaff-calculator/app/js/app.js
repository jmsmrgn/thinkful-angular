angular.module('waitStaff', [])
  .controller('CalcController', function($scope){
    window.$scope = $scope;

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

      $scope.meals.push(currMeal);

      custCharges(currMeal);

      calcEarnings($scope.meals, $scope.currCustCharges);
    }

    function custCharges(currMeal) {
      $scope.currCustCharge.subtotal = currMeal.basePrice + (currMeal.basePrice * (currMeal.taxRate / 100));
      $scope.currCustCharge.tip = $scope.currCustCharge.subtotal * (currMeal.tipPerc / 100);
      $scope.currCustCharge.total = $scope.currCustCharge.subtotal + $scope.currCustCharge.tip;

      $scope.currCustCharges.push(angular.copy($scope.currCustCharge));
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
