angular.module("RevenueModule")
  .controller("RevenueController", function (RevenueService) {
    var vm = this; //rc

    vm.mainData;

    vm.profit = {
      dateSelected: undefined,
      netProfit: [],
      grossProfit: [],
      invalidDate: false,
    };

    vm.acct = {
      dateSelected: undefined,
      tableData: undefined,
      invalidDate: false,
    };

    vm.datatable = tableLimitAndPage();
    vm.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    vm.series = [];
    vm.chartTitleFontSize = 13.5;
    vm.chartLegendFontSize = 12;
    vm.colors = ['#5cbae6', '#b6d957', '#fac364', '#d998cb', '#8cd3ff', '#f2d249', '#93b9c6', '#ccc5a8', '#52bacc', '#dbdb46', '#98aafb', '#447c69', '#e4bf80', '#f19670', '#be5168', '#65387d', '#e279a3', '#5698c4'];

    vm.netProfitOptions = {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Net Profit',
        fontSize: vm.chartTitleFontSize
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 10,
          fontSize: vm.chartLegendFontSize,
          padding: 4
        }
      },
    }

    vm.grossProfitOptions = {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Gross Profit',
        fontSize: vm.chartTitleFontSize
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 10,
          fontSize: vm.chartLegendFontSize,
          padding: 4
        }
      },
    }

    vm.mainColumn = ["Raw Materials", "Indirect Materials", "Equipment", "WPI", "Direct Labor", "Indirect Labor", "Salaries Expense", "FGI", "CGS", "Sales Revenue", "Cash"];

    vm.init = function () {
      vm.loadingData = true;
      getData();
    }

    function getData() {
      RevenueService.getData().$loaded()
        .then(function (success) {
          vm.mainData = success.AccountingBooks;
          vm.loadingData = false;
        })
        .catch(function (error) {
          console.error(error);
          vm.loadingData = false;
        });
    }

    vm.viewHistory = function () {
      //reset variables
      vm.series = [];
      vm.profit.netProfit = [];
      vm.profit.grossProfit = [];
      //split date string to get chosen month and year
      let selectedYear = moment(vm.profit.dateSelected).format('YYYY');
      vm.series.push(selectedYear);
      
      if (vm.mainData[selectedYear]) {
        let months = Object.keys(vm.mainData[selectedYear]);

        for (let j in vm.mainData[selectedYear]) {
          for (let i in months) {
            switch(months[i]) {
              case 'January': 
                vm.profit.netProfit[0] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[0] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'February': 
                vm.profit.netProfit[1] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[1] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'March': 
                vm.profit.netProfit[2] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[2] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'April': 
                vm.profit.netProfit[3] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[3] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'May': 
                vm.profit.netProfit[4] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[4] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'June': 
                vm.profit.netProfit[5] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[5] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'July': 
                vm.profit.netProfit[6] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[6] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'August': 
                vm.profit.netProfit[7] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[7] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'September': 
                vm.profit.netProfit[8] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[8] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'October': 
                vm.profit.netProfit[9] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[9] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'November': 
                vm.profit.netProfit[10] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[10] = vm.mainData[selectedYear][j].GrossProfit;
                break;

              case 'December': 
                vm.profit.netProfit[11] = vm.mainData[selectedYear][j].NetProfit;
                vm.profit.grossProfit[11] = vm.mainData[selectedYear][j].GrossProfit;
                break;
            }
          }
        }
      }

      vm.profit.invalidDate = (vm.profit.netProfit.length && vm.profit.grossProfit.length) ? false : true;
    }

    vm.dateChanged = function () {
      vm.acct.dateSelected = moment(vm.acct.dateSelected).format('MMMM YYYY');

      //split date string to get chosen month and year
      let selectedDate = vm.acct.dateSelected.split(" ");
      let month = selectedDate[0];
      let year = selectedDate[1];

      //filter data by year and month
      vm.acct.tableData = vm.mainData[year][month];

      //assign sub-table data
      vm.trialBalanceData = vm.acct.tableData ? vm.acct.tableData.TrialBalance : undefined;

      vm.adjustedTrialBalanceData = vm.acct.tableData ? vm.acct.tableData.AdjustedTrialBalance : undefined;

      vm.sfpData = vm.acct.tableData ? vm.acct.tableData.SFP : undefined;

      vm.sciData = vm.acct.tableData ? vm.acct.tableData.SCI : undefined;

      //if no data, inform user
      vm.acct.invalidDate = !vm.acct.tableData ? true : false;
    }
  });