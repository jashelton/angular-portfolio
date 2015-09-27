angular.module('AngularPortfolio').controller('typedController', function($scope) {
  // $scope.updates = ['Welcome to the AngularJS version of my portfolio.',
  // 'I am a Junior Web Developer'];

  $(function(){
    $(".typed").typed({
      strings:["Justin Shelton | Front End "],
      typeSpeed: 30,
      startDelay: 1500,
      backDelay: 1500,
      backSpeed: 15,
      showCursor: false,
      loop: false,
      contentType: 'text',
      loopCount: false,
      callback: function() {
        showSecond();
      }
    });

    function showSecond(){

    $(".typed-second").typed({
          strings: ["Developer", "Designer", "Engineer"],
          typeSpeed: 30,
          startDelay: 0,
          backDelay: 1500,
          backSpeed: 15,
          showCursor: true,
          loop: false,
          contentType: 'text',
          loopCount: false,

      });

  }

  });
});
