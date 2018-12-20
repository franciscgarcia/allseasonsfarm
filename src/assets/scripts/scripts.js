// for arrays
function formatDateArr(data) {
  var options = {
    "year": 'numeric',
    "month": 'short',
    "day": 'numeric'
    // "hour": '2-digit',
    // "minute": '2-digit'
  };
  angular.forEach(data, function(v) {
    var origDate = null;
    origDate = Date.parse(v.modified_date);
    var modDate = new Date(v.modified_date);
    v.modified_date = modDate.toLocaleDateString("en-US",options);
  });
  return data;
}


function tableLimitAndPage() {
  return {
    "limit": 25,
    "page": 1
  }
}