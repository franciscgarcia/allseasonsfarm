
module.exports.login = function (req, res, next) {
  var responseData = {
    "id": 1,
    "username": successCallback1[0].login_name,
    "first_name": successCallback1[0].full_name,
    "message": "Login Success"
  };

  res.json(responseData); 
  // webUser.getUser(req.body.username).then(function(successCallback) {
  //   res.status(200);

  //   var responseData = {
  //     "id": 1,
  //     "username": successCallback1[0].login_name,
  //     "first_name": successCallback1[0].full_name,
  //     "message": "Login Success"
  //   };

  //   res.json(responseData);    
  // }, function(errorCallback) {
  //   res.status(500);
  //   res.json({
  //       "message": "Error: " + errorCallback
  //   });
  // });
};