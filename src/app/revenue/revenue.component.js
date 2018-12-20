angular.module("RevenueModule")
  .controller("RevenueController", function(RevenueService) {
    var vm = this; //rc

    vm.datatable = tableLimitAndPage();
    vm.chartTitleFontSize = 13.5;
    vm.chartLegendFontSize = 12;
    vm.colors = ['#5cbae6', '#b6d957', '#fac364', '#d998cb', '#8cd3ff', '#f2d249', '#93b9c6', '#ccc5a8', '#52bacc', '#dbdb46', '#98aafb', '#447c69', '#e4bf80', '#f19670', '#be5168', '#65387d', '#e279a3', '#5698c4'];

    vm.chartOptions = {
      maintainAspectRatio: false,
      // layout: {
      //   padding: {
      //     top: -10
      //   }
      // },
      title: {
        display: true,
        text: 'Sales by Time of Day',
        fontSize: vm.chartTitleFontSize
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 10,
          fontSize: vm.chartLegendFontSize,
          padding: 4
        }
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            autoSkip: false,
            //   maxRotation: 90,
            //   minRotation: 90
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return $filter('currency')(value, '', 0);
            }
          }
        }]
      },
      tooltips: {
        mode: 'nearest',
        caretSize: 0,
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label;
            var sales = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            return label + ': ' + $filter('currency')(sales, vm.currency_sign, 2);
          }
        }
      },
      // trendlineLinear: {
      //     style: "rgba(255,105,180, .8)",
      //     width: 2
      // }
    }

    vm.mainColumn = ["Raw Materials", "Indirect Materials", "Equipment", "WPI", "Direct Labor", "Indirect Labor", "Salaries Expense", "FGI", "CGS", "Sales Revenue", "Cash"];

    vm.init = function() {
      vm.firstTableData = [];
      vm.secondTableData = [];
      vm.thirdTableData = [];
      vm.fourthTableData = [];
      getFirstTableData();
      getSecondTableData();
      getThirdTableData();
      getFourthTableData();
    }

    function getFirstTableData() {getFirstTableData
      vm.firstTableData = RevenueService.getFirstTableData();
      // console.log(vm.firstTableData);
    }

    function getSecondTableData() {getFirstTableData
      vm.secondTableData = RevenueService.getSecondTableData();
      console.log(vm.secondTableData);
    }

    function getThirdTableData() {getFirstTableData
      vm.thirdTableData = RevenueService.getThirdTableData();
      console.log(vm.thirdTableData);
    }

    function getFourthTableData() {getFirstTableData
      vm.fourthTableData = RevenueService.getFourthTableData();
      console.log(vm.fourthTableData);
    }
    
  });