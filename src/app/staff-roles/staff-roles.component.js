angular.module("StaffRolesModule")
  .controller("StaffRolesController", function($mdDialog, StaffRolesService) {
    var vm = this; //srlc
    
    vm.datatable = tableLimitAndPage();
    console.log(vm.datatable);
    
    vm.init = function() {
      
    };

    vm.addEmployee = function(ev) {
      $mdDialog.show({
        controller: 'AddEmployeeCtrl',
        controllerAs : "aec",
        templateUrl: 'src/app/staff-roles/modal/add-employee.mdl.html',
        clickOutsideToClose: false,
        targetEvent: ev,
        escapeToClose: false
      })
      .then(function(){
        //used for handling data returned from modal
      }, function() {
        //used for handling cancelled modal
      });
    };
  });