angular.module('myApp', [])

  .controller('ctrl1', function($scope) {
    $rootScope = [{
      name: 'name',
      job_title: 'job title',
      tedious_task: 'tedious task',
      dirty_task: 'dirty task',
      celebrity: 'celebrity',
      useless_skill: 'useless skill',
      obnoxious_celebrity: 'obnoxious celebrity',
      huge_number: 'huge number',
      adjective: 'adjective'
    }];
  })

  .controller('ctrl2', function($scope) {
    $scope.template = function(gender) {
      console.log(gender);
      if (gender === 'male') {
        $('.user-inputs').addClass('disabled');
        $('.template').removeClass('disabled');
        $('.male-version').show();
        $('.female-version').hide();
      } else if (gender === 'female') {
        $('.user-inputs').addClass('disabled');
        $('.template').removeClass('disabled');
        $('.female-version').show();
        $('.male-version').hide();
      }
    }

    // $scope.hideForm = false;

    // $scope.submit = function(){
    //   $scope.hideForm = true;
    // }

    // $scope.reset = function(){
    //   // $scope.data = {};
    //   $scope.hideForm = false;
    //   $scope.submitted = false;
    // }
  });
