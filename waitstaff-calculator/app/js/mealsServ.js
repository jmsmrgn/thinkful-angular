angular.module('waitStaffApp')
  .factory('meals', function(){

    var meals = [];
    var customerCharges = [];

    return {
      add: add,
      all: all,
      calcCharges: calcCharges
    };

    function add(meal){
      meals.push(meal);
    }

    function calcCharges(meal){
      var charges = {
        subtotal: 0,
        tip: 0,
        total: 0
      };
      charges.subtotal = meal.basePrice + (meal.basePrice * (meal.taxRate / 100));
      charges.tip = charges.subtotal * (meal.tipPerc / 100);
      charges.total = charges.subtotal + charges.tip;

      customerCharges.push(angular.copy(charges));
      return charges;
    }

    function all(){
      return meals;
    }
  });
