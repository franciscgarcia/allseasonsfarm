angular.module("HomeModule")
  .controller("HomeController", function($scope, $state, $mdSidenav, $mdDialog, HomeService) {
    var vm = this; //hc

    vm.init = function() {
      listModules();
    }

    function listModules() {
      vm.modules = HomeService.listModules();
    }

    vm.toggleSidenav = function(id) {
      $mdSidenav(id).toggle();
    }

    $scope.$watch(function(){
      return $state.$current.name
    }, function(){
      var pageTitle = angular.copy($state.current.name);
      pageTitle = pageTitle.replace(/-/g, " ");
      vm.currentState = pageTitle;
    })

    vm.logout = function(ev) {
      // console.log(ev);
      var confirm = $mdDialog.confirm()
      .title('Logging out?')
      // .textContent('custom message here')
      .ariaLabel('Log Out')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');

      $mdDialog.show(confirm).then(function() {
        $state.go('login');
      }, function() {
        // console.log("cancelled");
      });
    }
  });