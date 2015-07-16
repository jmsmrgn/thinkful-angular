angular.module('waitStaff', [])
  .controller('CalcController', function($scope){
    window.$scope = $scope;

    $scope.meal = {
      basePrice: 0,
      taxRate: 0,
      tipPerc: 0
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

    $scope.submit = function(){
      var currMeal = angular.copy($scope.meal);
      var meals = angular.copy($scope.meals);

      $scope.meals.push(currMeal);

      custCharges(currMeal);

      calcEarnings(meals, currCustCharges);

      resetMeal();
    }

    function custCharges(currMeal) {
      var currCustCharge = [
        $scope.currCustCharge.subtotal = $scope.meal.basePrice + ($scope.meal.basePrice * ($scope.meal.taxRate / 100)),
        $scope.currCustCharge.tip = $scope.currCustCharge.subtotal * ($scope.meal.tipPerc / 100),
        $scope.currCustCharge.total = $scope.currCustCharge.subtotal + $scope.currCustCharge.tip
      ];

      currCustCharges = {
        subtotal: currCustCharge[0],
        tip: currCustCharge[1],
        total: currCustCharge[2]
      }

      $scope.currCustCharges.push(currCustCharges);
    }

    // Here i'm trying to iterate over the currCustCharges array and sum the tips - HELP!!
    function calcTips(currCustCharges) {
      var tipTotal = 0;
      for (var i = 0; i < $scope.currCustCharges.length; i++) {
        tipTotal += $scope.currCustCharges.tip[i];
      }
      return tipTotal;
    }
    // Seem to be stuck getting a value here to use below
    var tips = calcTips();

    function calcEarnings(meals, currCustCharges) {
      currEarnings = [
        $scope.earnings.tipTotal = tips,
        $scope.earnings.mealCount = $scope.meals.length,
        $scope.earnings.avgTip = $scope.earnings.tipTotal / $scope.earnings.mealCount
      ];

      earningsTotals = {
        tipTotal: currEarnings[0],
        mealCount: currEarnings[1],
        tipTotal: currEarnings[2]
      }

      $scope.earningsTotals.push(earningsTotals);
    }

    function resetMeal() {
      $scope.meal.basePrice = 0;
      $scope.meal.taxRate = 0;
      $scope.meal.tipPerc = 0;
    }
  });
