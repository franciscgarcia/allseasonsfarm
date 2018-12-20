angular.module("HomeModule")
  .service("HomeService", function() {
    var vm = this;

    vm.listModules = function() {
      var moduleList = [
        {
          "code": "TOTALREVENUE",
          "name": "Revenue",
          "description": null,
          "icon": "attach_money",
          "color": "green",
          "url": "revenue"
        },
        {
          "code": "PRODPLAN",
          "name": "Planting Season Planning",
          "description": "Production Planning",
          "icon": "schedule",
          "color": "yellow",
          "url": "production-planning"
        },
        {
          "code": "CROPTREND",
          "name": "Crop Trend",
          "description": "By Month of Year",
          "icon": "show_chart",
          "color": "red",
          "url": "crop-trend"
        },
        {
          "code": "WHSEINV",
          "name": "Warehouse & Inventory",
          "description": "Reports",
          "icon": "poll",
          "color": "blue",
          "url": "warehouse-&-inventory"
        },
        {
          "code": "STAFFROLES",
          "name": "Staff & Roles",
          "description": "Management",
          "icon": "group",
          "color": "purple",
          "url": "staff-&-roles"
        }
      ];
      return moduleList;
    }
  });