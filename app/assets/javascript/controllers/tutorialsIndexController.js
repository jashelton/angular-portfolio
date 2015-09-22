angular.module('AngularPortfolio').controller('tutorialsIndexController', function($scope, $route) {
  this.tutorials = tutorials;
})
.directive('myModal', function() {
  return {
    link: function(scope, element, attr) {
      element.on('click', function() {
        $(this).siblings('div').fadeIn();
      });
    }
  }
})
.directive('closeModal', function($route) {
  return {
    link: function(scope, element, attr) {
      element.on('click', function() {
        $(this).parent().fadeOut();
        $route.reload();
      });
    }
  };
});
