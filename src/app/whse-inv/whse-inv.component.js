angular.module("WhseInvModule")
  .controller("WhseInvController", function($mdDialog, WhseInvService) {
    var vm = this; //wic

    vm.itemDefinitions = [{
      "name": "produce",
      "selected": true
    },{
      "name": "fertilizer",
      "selected": false
    },{
      "name": "insecticide",
      "selected": false
    },{
      "name": "equipment",
      "selected": false
    }];

    vm.datatable = tableLimitAndPage();

    vm.init = function() {
      
    }

    vm.defineNewItem = function(mode) {
      angular.forEach(vm.itemDefinitions, function(item) {
        if(item.selected) {
          item.selected = !item.selected;
        }        
      });

      angular.forEach(vm.itemDefinitions, function(item) {
        if(item.name == mode) {
          item.selected = true;
        }
      })
      


    };
  });