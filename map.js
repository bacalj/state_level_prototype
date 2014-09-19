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
                console.log(this);
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

        tooltip: {
            enabled:true,
            formatter: function(){
                var txt = "";
                    txt += this.series.name + "<br />";
                    if(typeof this.point.value === 'number'){
                        txt += this.point.name + ": <b>" + this.point.value + "%</b>";
                    }else if(this.point.value == "DNC"){
                        txt += this.point.name + ": <b>Data Not Collected</b>";
                    }else if(this.point.value == "DNA"){
                        txt += this.point.name + ": <b>Data Not Available</b>";
                    }else if(this.point.value == "DSU"){
                        txt += this.point.name + ": <b>Data Statistically Unreliable</b>";
                    }else{
                        txt += this.point.name + ": <b>"+this.point.value+"</b>";
                    }
                    return txt;
            }
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

        //colors:['rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,81,156)','rgb(8,48,107)'],
        //colors: ['#0C326A', '#14549a', '#2873b3', '#4894C3'],
        colors: [ '#4894C3','#2873b3', '#14549a', '#0C326A'],

        colorAxis: {
            dataClassColor:'category',
            dataClasses:[       
                { 
                    from:0, to: 59.15, name:'0-<59.1%'
                },

                { 
                    from:59.16, to:61.15, name:'59.1-<61.15%'
                },

                { 
                    from:61.16, to:64.95, name:'61.15-<64.95%'
                },

                { 
                    from:64.96, to:70.5, name:'64.95-<70.5%'
                },

                { 
                    to:'DSU', from:'DSU', name:'Data Statistically Unreliable', color:"#fde295" 
                },

                { 
                    to:'DNC', from:'DNC', name:'Data Not Collected', color:"#fef59c" 
                },

                ],
            },


        series: [{
            mapData : mapData,
            data: data,
            joinBy: 'ucName',
            name: 'Year: 2009',
            states: {
                hover: {
                    color: '#c0c0c0'
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
        }, 

        {
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small'], 'mapline'),
            color: 'silver'
        }]
    });
});