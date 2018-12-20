angular.module("ProdPlanModule")
  .controller("ProdPlanController", function($mdDialog, ProdPlanService) {
    var vm = this; //ppc

    vm.minDate = new Date(Date.now());
    
    vm.datatable = tableLimitAndPage();
    console.log(vm.datatable);

    vm.init = function() {
      
    }
    
  });