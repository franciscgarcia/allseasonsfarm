angular.module("LoginModule")
  .controller("LoginController", function($state) {
    var vm = this; //lc

    vm.init = function() {
      
    };

    vm.login = function() {
      $state.go('home');
    };

  });