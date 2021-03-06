angular.module('AngularPortfolio').directive('portfolioFooter', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'assets/templates/directives/portfolio-footer.html',
    controller: function($scope, $location) {
      $scope.isPage = function(name) {
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
