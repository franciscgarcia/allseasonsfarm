angular.module("ProdPlanModule")
  .controller("ProdPlanController", function ($mdDialog, ProdPlanService) {
    var vm = this; //ppc

    vm.mainData = [];
    vm.cropFamily = [];
    vm.cropName = [];
    vm.cropVariety = [];
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
          let prodPlanKeys = Object.keys(success.ProductionPlanning);
          prodPlanKeys.forEach(key => {
            vm.mainData.push(success.ProductionPlanning[key]);
          })

          //get produce data for dropdowns
          let produceKeys = Object.keys(success.Produce);
          produceKeys.forEach(key => {
            if(success.Produce[key].CropFamily) {
              vm.cropFamily.push(success.Produce[key].CropFamily);
            }

            if(success.Produce[key].CropName) {
              vm.cropName.push(success.Produce[key].CropName);
            }

            if(success.Produce[key].Variety) {
              let varietyKeys = Object.keys(success.Produce[key].Variety);
              varietyKeys.forEach(variety => {
                vm.cropVariety.push(variety);
              })              
            }
          })

          //remove duplicate entries
          vm.cropFamily = Array.from(new Set(vm.cropFamily));
          vm.cropName = Array.from(new Set(vm.cropName));
          vm.cropVariety = Array.from(new Set(vm.cropVariety));
          // console.log(vm.cropFamily, vm.cropName, vm.cropVariety);
        })
        .catch(function (error) {
          console.error(error);
          vm.loadingData = false;
        });
    }

  });