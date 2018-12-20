var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 90;
// Local libraries
var controllerRouter = require("./src/server/router/controller-router.js");

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log("Listening on port: " + port);
});

app.post("/api/login", controllerRouter.loginController.login);
app.get("/api/module/list", controllerRouter.moduleController.listModules);

// Device User Requests
// app.get("/api/device-user/list", controllerRouter.deviceUserMaintenanceController.listDeviceUsers);
// app.post("/api/device-user/toggleDeviceUserStatus", controllerRouter.deviceUserMaintenanceController.toggleDeviceUserStatus);
// app.post("/api/device-user/force-logout",  controllerRouter.deviceUserMaintenanceController.forceLogout);

// Broadcast Message Requests
// app.get("/api/broadcast-message/list-device-users",  controllerRouter.broadcastMessageController.listDeviceUsers);
// app.post("/api/broadcast-message/send-broadcast-message",  controllerRouter.broadcastMessageController.sendBrdcstMsg);

// Account Report Requests
// app.get("/api/account-report/getRegions",  controllerRouter.accountReportController.getRegions);
// app.get("/api/account-report/getProvinces",  controllerRouter.accountReportController.getProvinces);
// app.get("/api/account-report/getMunicipalities",  controllerRouter.accountReportController.getMunicipalities);
// app.get("/api/account-report/getBaranggays",  controllerRouter.accountReportController.getBaranggays);
// app.get("/api/account-report/getStores",  controllerRouter.accountReportController.getStores);
// app.get("/api/account-report/getTaggers",  controllerRouter.accountReportController.getTaggers);
// app.get("/api/account-report/generateReport", controllerRouter.accountReportController.generateReport);
// app.get("/api/account-report/getReportData",  controllerRouter.accountReportController.getReportData);
// app.get("/api/account-report/countReport",  controllerRouter.accountReportController.countReport);
// app.get("/api/account-report/exportReport",  controllerRouter.accountReportController.exportReport);

app.get("*", function (request, response) {
    response.sendFile(__dirname + "/src/index.html");
});
