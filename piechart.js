google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Loan Already Paid Off',  3295],
        ['Value Unpaid',     2091],
        ['Save Today',      50],

    ]);
    var formatter = new google.visualization.NumberFormat({
        prefix: '$'
    });
    formatter.format(data, 1);

    var options = {
        title: 'Loan Pizza',
        pieSliceText: 'value',
        pieHole: 0.4,
        slices: {
            0: { color: 'green' },
            1: { color: 'red' },
            2: { color: 'orange' }
          }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}
