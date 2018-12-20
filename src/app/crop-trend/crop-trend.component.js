angular.module("CropTrendModule")
  .controller("CropTrendController", function($mdDialog, CropTrendService) {
    var vm = this; //ctc
    

    vm.init = function() {
     console.log("crop  trend");
    }
  });