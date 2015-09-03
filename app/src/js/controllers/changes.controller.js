/*Main app Controller*/

app.controller('changesController', function($http, $scope) {
    var crossOver = this;
    crossOver.data = [];
    crossOver.selectedRow = undefined;

    $http.get('data.json')
    .then(function(response) {
      crossOver.data = response.data;      
    }, function(response) {
      console.log('DEBUG: error acessing data');
    });
   

    crossOver.validateProcessType = function (data) {
      if (data.type == "change") {
        if (data.status == "pending") {
          return "computer_grey";
        }
        if (data.status == "complete") {
          return "computer_green";
        }
      } else if (data.type == "build") {
        if (data.status == "running") {
          return "brick_blue";
        }
        if (data.status == "accepted") {
          return "brick_green";
        }
        if (data.status == "rejected") {
          return "brick_red";
        }
      }
    };

    crossOver.selectRow = function(index) {
        if (index != crossOver.selectedRow) {
            crossOver.selectedRow = index;
            createPieChart('pie-chart-test-' + index, crossOver.getTestsChartData(crossOver.data[index].unit_tests));
            createPieChart('pie-chart-functional-' + index, crossOver.getTestsChartData(crossOver.data[index].functional_tests));
        }
    }

    crossOver.checkTestStatus = function(test) {
      if ((test.ok / (test.ok + test.error))*100 < 70) {
        return "error";
      }
      return "ok";
    }

    crossOver.checkTestPercentStatus = function(test) {
      return (test.ok / (test.ok + test.error))*100;
    }

    crossOver.getTestsChartData = function(test) {
      return [
        ['ok', test.ok],
        ['error', test.error],
      ];
    }

    createPieChart = function(elementId, chartData)  {
        // Create the data table and instantiate the chart
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Label');
        data.addColumn('number', 'Value');
        var chart = new google.visualization.PieChart(document.getElementById(elementId));
        var label, value;
        data.removeRows(0, data.getNumberOfRows());
        for (var i = 0; i < chartData.length; i++) {
            label = chartData[i][0];
            value = parseFloat(chartData[i][1], 10);
            if (!isNaN(value)) {
                data.addRow([chartData[i][0], value]);
            }                    
        };
        var options = {
            'width': '80',
            'height': '80',
            'legend': 'none',
            'enableInteractivity': false,
            'chartArea' : {
                'top' : 0,
                'left': 0,
                'width': '100%',
                'height': '100%'
            },
            'pieSliceText' : 'value',
            'pieSliceTextStyle' : {
                'color' : 'black'
            },
            'colors' : ['#72ac4d','eb7d3b'],
            'pieStartAngle': 60,
            'backgroundColor': {
                'fill': 'none',
                'stroke': 'none'
            }
        };
        chart.draw(data, options);
    }


});