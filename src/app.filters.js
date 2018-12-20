angular.module("AllSeasonsFarmApp")
  .filter('excludeUsed', function() {
    var filter = function(columns, currentFilters, currentFilter) {
        var tempCols = angular.copy(columns);
        tempCols =  tempCols.filter(function(e) {
            return e!=currentFilter;
        });
        // console.log(tempCols);

        if(currentFilters.length < 1) {
            return columns;
        } else {
            var checkCol = function(col) {
                // return (col != excludeVal1) && (col != excludeVal2);
                //validate currentHeaders here
                return col
            };

            return columns.filter(checkCol);
        }
    };
    return filter;
  })

  .filter('ellipsis', function () {
    return function (input, chars) {
      if(input) {
          if (input.length > chars) {
            return input.substring(0, chars) + '...';
        } else {
            input = input.split(".");
            return input[0];
        }
      } else return input;
    };
  });
