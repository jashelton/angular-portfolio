angular.module('AngularPortfolio').config(function($routeProvider) {
  $routeProvider
  .when('/', {
    redirectTo: '/home'
  })
  .when('/home', {
    templateUrl: 'assets/templates/home/index.html',
    controller: 'homeIndexController'
  })
  .when('/works',  {
    templateUrl: 'assets/templates/works/index.html',
    controller: 'worksIndexController'
  })
  .when('/works/:id', {
    templateUrl: 'assets/templates/works/show.html',
    controller: 'worksShowController'
  })
  .when('/tutorials', {
    templateUrl: 'assets/templates/tutorials/index.html',
    controller: 'tutorialsIndexController'
  })
  .otherwise ({
    redirectTo: '/home'
  })
});
