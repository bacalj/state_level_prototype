$(function () {

    // Load the data from the HTML table and tag it with an upper case name used for joining
    var data = [],
    // Get the map data
        mapData = Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small']);

    Highcharts.data({
        table: document.getElementById('data'),
        startColumn: 1,
        startRow: 1,
        complete: function (options) {
            $.each(options.series[0].data, function () {
                data.push({
                    ucName: this[0],
                    value: this[1]
                });
            });
        }
    });

    // Process mapdata
    $.each(mapData, function () {
        var path = this.path,
            copy = { path: path };

        // This point has a square legend to the right
        if (path[1] === 1730) {

            // Identify the box
            Highcharts.seriesTypes.map.prototype.getBox.call(0, [copy]);

            // Place the center of the data label in the center of the point legend box
            this.middleX = ((path[1] + path[4]) / 2 - copy._minX) / (copy._maxX - copy._minX);
            this.middleY = ((path[2] + path[7]) / 2 - copy._minY) / (copy._maxY - copy._minY);

        }
        // Tag it for joining
        this.ucName = this.name.toUpperCase();
    });




    // Initiate the chart
    $('#container').highcharts('Map', {

        title: {
            text: null
        },

        subtitle: {
            text: null
        },

        mapNavigation: {
            enabled: false,
            enableButtons: false
        },

        xAxis: {
            labels: {
                enabled: false
            }
        },

        legend: {
            enabled:true,
            layout:'horizontal'
        },

        exporting: {
            enabled:false
        },

        colorAxis: {
            dataClasses:[
                {
                    to:59.1, 
                    color:'yellow'
                },

                {
                    from:59.1,
                    to:61.5,
                    color:'orange'
                },

                {
                    from:61.15,
                    to:70.5,
                    color:'red'
                }
            ]
        },

        series: [{
            mapData : mapData,
            data: data,
            joinBy: 'ucName',
            name: 'Unemployment rate per 2014',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return this.point.properties['hc-a2'];
                },
                style: {
                    fontSize: '10px'
                }
            },
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small'], 'mapline'),
            color: 'silver'
        }]
    });
});