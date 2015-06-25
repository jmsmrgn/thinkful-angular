angular.module('myApp', [])
  .controller('myCtrl', function($scope) {
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
  .controller('whichVersion', function($scope) {
    $scope.template = function(gender) {
      console.log(gender);
      if (gender === 'male') {
        $('.template').addClass('template-enable');
        $('.male-version').show();
        $('.female-version').hide();
      } else if (gender === 'female') {
        $('.template').addClass('template-enable');
        $('.female-version').show();
        $('.male-version').hide();
      }
    };
  });
