module.exports.listModules = function (req, res) {
  var data = [
    {
      "code": "TOTALREVENUE",
      "name": "Total Revenue",
      "description": null,
      "icon": "attach_money",
      "color": "green",
      "child_modules": [
        // {
        //     "code": "DEVICEUSER",
        //     "name": "Device User",
        //     "description": null,
        //     "url": "device-user"
        // }
      ]
    },
    {
      "code": "PRODPLAN",
      "name": "Planting Season Planning",
      "description": "Production Planning",
      "icon": "schedule",
      "color": "yellow",
      "child_modules": [
        // {
        //   "code": "ACCTRPRT",
        //   "name": "Account Report",
        //   "description": null,
        //   "url": "account-report"
        // }
      ]
    },
    {
      "code": "CROPTREND",
      "name": "Crop Trend",
      "description": "By Month of Year",
      "icon": "show_chart",
      "color": "red",
      "child_modules": [
        // {
        //   "code": "ACCTRPRT",
        //   "name": "Account Report",
        //   "description": null,
        //   "url": "account-report"
        // }
      ]
    },
    {
      "code": "WHSEINV",
      "name": "Warehouse & Inventory",
      "description": "Reports",
      "icon": "poll",
      "color": "blue",
      "child_modules": [
        // {
        //   "code": "ACCTRPRT",
        //   "name": "Account Report",
        //   "description": null,
        //   "url": "account-report"
        // }
      ]
    },
    {
      "code": "STAFFROLES",
      "name": "Staff and Roles",
      "description": "Management",
      "icon": "group",
      "color": "purple",
      "child_modules": [
        // {
        //   "code": "ACCTRPRT",
        //   "name": "Account Report",
        //   "description": null,
        //   "url": "account-report"
        // }
      ]
    }
  ];
  res.json(data);
};
