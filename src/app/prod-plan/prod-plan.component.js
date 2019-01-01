angular.module("ProdPlanModule")
  .controller("ProdPlanController", function ($mdDialog, ProdPlanService) {
    var vm = this; //ppc

    vm.mainData = [];
    vm.minDate = new Date(Date.now());

    vm.datatable = tableLimitAndPage();

    vm.init = function () {
      vm.loadingData = true;
      getData();
    }

    function getData() {
      ProdPlanService.getData().$loaded()
        .then(function (success) {
          vm.loadingData = false;
          
          //push object list to array for repeat in html
          let keys = Object.keys(success.ProductionPlanning);;
          keys.forEach(key => {
            vm.mainData.push(success.ProductionPlanning[key]);
          })

          console.log(success);
        })
        .catch(function (error) {
          console.error(error);
          vm.loadingData = false;
        });
    }

  });