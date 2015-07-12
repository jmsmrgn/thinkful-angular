// Code goes here
angular.module('waitStaff', [])
  .controller('CalcController', function($scope){

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

    $scope.currCustCharges = [],

    $scope.submit = function(){
      var currMeal = angular.copy($scope.meal);

      $scope.meals.push(currMeal);

      custCharges(currMeal);

      //calcEarnings(calcEarnings);

      resetMeal();
      resetCurrCustCharge();
    }

    function custCharges() {
      $scope.currCustCharge.subtotal = $scope.meal.basePrice + ($scope.meal.basePrice * ($scope.meal.taxRate / 100)),
      $scope.currCustCharge.tip = $scope.currCustCharge.subtotal * ($scope.meal.taxRate / 100),
      $scope.currCustCharge.total = $scope.currCustCharge.subtotal + $scope.currCustCharge.tip

      $scope.currCustCharges.push.apply($scope.currCustCharges, [$scope.currCustCharge.subtotal, $scope.currCustCharge.tip, $scope.currCustCharge.total ]);
    }

    function resetMeal() {
      $scope.meal.basePrice = 0;
      $scope.meal.taxRate = 0;
      $scope.meal.tipPerc = 0;
    }

    function resetCurrCustCharge() {
      $scope.currCustCharge.subtotal = 0;
      $scope.currCustCharge.tip = 0;
      $scope.currCustCharge.total = 0;
    }

    // function resetCurrCustCharge() {
    //   $scope.currCustCharge.subtotal = 0;
    //   $scope.currCustCharge.tip = 0;
    //   $scope.currCustCharge.total = 0;
    // }


    // Subtotal is the value of the base meal price plus tax.
    // Tip is dollar value of the tip, given the subtotal and tip percentage.
    // Total is equal to subtotal plus tip.

    // function calcEarnings(meal) {
    //   var avgTip = tipTotal / mealCount;

    //   $scope.earnings = {
    //     tipTotal: tipTotal,
    //     mealCount: mealCount,
    //     avgTip: avgTip
    //   };
    // }

     // Tip total is the sum of all tips computed so far.
     // Meal count is the total number of meals input into the tool.
     // Average tip per meal is equal to the total tip value divided by the number of meals.
  });
