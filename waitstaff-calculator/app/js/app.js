// Code goes here
angular.module('waitStaff', [])
  .controller('CalcController', function($scope){

    $scope.meal = [];
    //var mealCount = 0;
    //var tipTotal = 0;

    $scope.submit = function(){
      var currMeal = {
        basePrice: '',
        taxRate: '',
        tipPerc: ''
      };
      $scope.meal.push();
      //mealCount++;
      //tipTotal++;

      custCharges(currMeal);
      calcEarnings(calcEarnings);
    }

    function custCharges(currMeal){
      var subtotal = $scope.meal.basePrice + ($scope.meal.basePrice * ($scope.meal.taxRate / 100));
      var tip = subtotal * ($scope.meal.taxRate / 100);
      var total = subtotal + tip;

      $scope.custCharges = {
        subtotal: subtotal,
        tip: tip,
        total: total
      };
    }

    function calcEarnings(meal) {
      //var avgTip = tipTotal / mealCount;

      // $scope.earnings = {
      //   tipTotal: tipTotal,
      //   mealCount: mealCount,
      //   avgTip: avgTip
      // };
    }
  });
