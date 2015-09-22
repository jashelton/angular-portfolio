angular.module('AngularPortfolio').directive('portfolioNav', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'assets/templates/directives/portfolio-nav.html',
    controller: function($scope, $location) {
      $scope.isPage = function(name) {
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
