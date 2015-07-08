// Code goes here
angular.module('waitStaff', [])
  .controller('calcCtrl', function($scope){

    $scope.meal = [];

    $scope.submit = function(){
      var currMeal = {
        basePrice: '',
        tax: '',
        tipPerc: ''
      };
      $scope.meal.push();

      custCharges(currMeal);
      calcEarnings(totalEarnings);
    }

    function custCharges(currMeal){
      //calculation here and update the data on the $scope
      var charges = {
        subtotal: currMeal.basePrice + currMeal.tax,
        tip: charges.subtotal * currMeal.tipPerc,
        total: charges.subtotal + charges.tip
      };
      $scope.custCharges = charges;
    }

    function calcEarnings(totalEarnings){
      //calculation here and update the data on the $scope
      var earnings = {
        tipTotal: custCharges.tip++,
        mealCount: mealcount++,
        averageTip: tipTotal / mealCount
      };
      $scope.calcEarnings = earnings;
    }
  });
