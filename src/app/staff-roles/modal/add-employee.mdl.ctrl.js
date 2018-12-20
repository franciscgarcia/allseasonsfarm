angular.module("StaffRolesModule")
  .controller("AddEmployeeCtrl", function($mdDialog) {
    var vm = this; //aec

    vm.positions = [
      { "id": 0, "name": "Manager" },
      { "id": 1, "name": "Assistant Manager" },
      { "id": 2, "name": "Staff" }
    ]

    vm.states = [
      { "id": 0, "name": "Inactive" },
      { "id": 1, "name": "Active" }
    ]

    vm.init = function() {

    };

    vm.closeModal = function() {
      $mdDialog.cancel();
    };
  });