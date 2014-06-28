$(function () {
    $('#line_chart').highcharts({
        title: {
        	text: 'Rainfall Pattern in States (2010'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text:'Months'
            }
        },
        yAxis:{
            title:{
                text:'Rainfall in mm'
            }
        },
        series: [{
            data: [79.8,26,1.7,28.3,233,502,443,319,234.8,249.1,583.2,355.7],
            name: 'Andaman and Nicobar'
        },
        {
            data: [72.8,66,4.5,28.3,123,502,43,59,234.8,29.1,583.2,35.7],
            name: 'Karnataka'
        }]

    });
    $('#spline_chart').highcharts({
        chart:{
            type: 'spline'
        },
        title: {
            text: 'Rainfall Pattern in States (2010)'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text:'Months'
            }
        },
        yAxis:{
            title:{
                text:'Rainfall in mm'
            }
        },
        series: [{
            data: [79.8,26,1.7,28.3,233,502,443,319,234.8,249.1,583.2,355.7],
            name: 'Andaman and Nicobar'
        },
        {
            data: [72.8,66,4.5,28.3,123,502,43,59,234.8,29.1,583.2,35.7],
            name: 'Karnataka'
        }]

    });
    $('#bar_chart').highcharts({
        chart:{
            type: 'bar'
        },
        title: {
            text: 'Rainfall Pattern in States (2010)'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text:'Months'
            }
        },
        yAxis:{
            title:{
                text:'Rainfall in mm'
            }
        },
        series: [{
            data: [79.8,26,1.7,28.3,233,502,443,319,234.8,249.1,583.2,355.7],
            name: 'Andaman and Nicobar'
        },
        {
            data: [72.8,66,4.5,28.3,123,502,43,59,234.8,29.1,583.2,35.7],
            name: 'Karnataka'
        }]

    });
    $('#pie_chart').highcharts({
        chart:{
            type: 'pie'
        },
        title: {
            text: 'Rainfall Pattern in States (2010)'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title:{
                text:'Months'
            }
        },
        yAxis:{
            title:{
                text:'Rainfall in mm'
            }
        },
        series: [{
            data: [79.8,26,1.7,28.3,233,502,443,319,234.8,249.1,583.2,355.7],
            name: 'Andaman and Nicobar'
        },
        {
            data: [72.8,66,4.5,28.3,123,502,43,59,234.8,29.1,583.2,35.7],
            name: 'Karnataka'
        }]

    });
});