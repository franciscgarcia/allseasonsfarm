angular.module("ProdPlanModule")
  .service("ProdPlanService", function($firebaseObject) {
    var vm = this;
    
    vm.getData = function() {
      var ref = firebase.database().ref();
      return $firebaseObject(ref);
    }

  });