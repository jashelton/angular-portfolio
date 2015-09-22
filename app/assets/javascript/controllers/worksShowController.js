angular.module('AngularPortfolio').controller('worksShowController', function($scope, $routeParams, $filter) {
  this.works = works;
  var currentId = $routeParams.id;
  $scope.getId = currentId;
});
