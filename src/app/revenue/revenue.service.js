angular.module("RevenueModule")
  .service("RevenueService", function($firebaseObject) {
    var vm = this;

    vm.getData = function() {
      var ref = firebase.database().ref();
      return $firebaseObject(ref);
    }
    
  });