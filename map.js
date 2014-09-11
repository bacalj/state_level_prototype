$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "us-ma",
            "value": 63
        },
        {
            "hc-key": "us-wa",
            "value": 55.6
        },
        {
            "hc-key": "us-ca",
            "value": 'DSU'
        },
        {
            "hc-key": "us-or",
            "value": 'DSU'
        },
        {
            "hc-key": "us-nv",
            "value": 53.8
        },
        {
            "hc-key": "us-nm",
            "value": 72.1
        },
        {
            "hc-key": "us-co",
            "value": 'DSU'
        },
        {
            "hc-key": "us-wy",
            "value": 67.2
        },
        {
            "hc-key": "us-wi",
            "value": 62.8
        },
        {
            "hc-key": "us-ks",
            "value": 'DSU'
        },
        {
            "hc-key": "us-ne",
            "value": 'DSU'
        },
        {
            "hc-key": "us-me",
            "value": 'DSU'
        },
        {
            "hc-key": "us-ok",
            "value": 'DSU'
        },
        {
            "hc-key": "us-mo",
            "value": 59.1
        },
        {
            "hc-key": "us-mi",
            "value": 'DSU'
        },
        {
            "hc-key": "us-il",
            "value": 61.1
        },
        {
            "hc-key": "us-in",
            "value": 67.0
        },
        {
            "hc-key": "us-vt",
            "value": 62.8
        },
        {
            "hc-key": "us-az",
            "value": 60.1
        },
        {
            "hc-key": "us-ar",
            "value": 'DSU'
        },
        {
            "hc-key": "us-tx",
            "value": 60.7
        },
        {
            "hc-key": "us-id",
            "value": 'DSU'
        },
        {
            "hc-key": "us-ri",
            "value": 'DSU'
        },
        {
            "hc-key": "us-al",
            "value": 64.3
        },
        {
            "hc-key": "us-ga",
            "value": 70.1
        },
        {
            "hc-key": "us-ms",
            "value": 'DSU'
        },
        {
            "hc-key": "us-sc",
            "value": 63.2
        },
        {
            "hc-key": "us-nc",
            "value": 58.2
        },
        {
            "hc-key": "us-va",
            "value": 66.5
        },
        {
            "hc-key": "us-ia",
            "value": 67.2
        },
        {
            "hc-key": "us-md",
            "value": 'DSU'
        },
        {
            "hc-key": "us-de",
            "value": 51.5
        },
        {
            "hc-key": "us-nj",
            "value": 59.2
        },
        {
            "hc-key": "us-pa",
            "value": 61.2
        },
        {
            "hc-key": "us-ny",
            "value": 'DSU'
        },
        {
            "hc-key": "us-sd",
            "value": 'DSU'
        },
        {
            "hc-key": "us-ct",
            "value": 53.8
        },
        {
            "hc-key": "us-nh",
            "value": 60
        },
        {
            "hc-key": "us-ky",
            "value": 70.9
        },
        {
            "hc-key": "us-oh",
            "value": 65.1
        },
        {
            "hc-key": "us-tn",
            "value": 80.3
        },
        {
            "hc-key": "us-wv",
            "value": 64.8
        },
        {
            "hc-key": "us-dc",
            "value": 69.5
        },
        {
            "hc-key": "us-mn",
            "value": 68.4
        },
        {
            "hc-key": "us-mt",
            "value": 59.1
        },
        {
            "hc-key": "us-la",
            "value": 62.4
        },
        {
            "hc-key": "us-nd",
            "value": 52.5
        },
        {
            "hc-key": "us-fl",
            "value": 60.7
        },
        {
            "hc-key": "us-ut",
            "value": 61.1
        },
        {
            "hc-key": "us-hi",
            "value": 'DSU'
        },
        {
            "hc-key": "us-ak",
            "value": 56
        }
    ];

    // Initiate the chart
    $('#mymap').highcharts('Map', {

        title : {
            text : 'State Level Data Title'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-all.js">United States of America</a>'
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});