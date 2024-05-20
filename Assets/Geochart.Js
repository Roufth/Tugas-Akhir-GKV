// Google Charts
google.charts.load('current', {
    packages: ['geochart'],
    mapsApiKey: ''
});
google.charts.setOnLoadCallback(drawRegionsMap);


function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Province', 'Total Cases'],
        ['Aceh', 44038],
        ['Bali', 166831],
        ['Banten', 333875],
        ['Bengkulu', 29173],
        ['DKI Jakarta', 1412511],
        ['Yogyakarta', 224307],
        ['Gorontalo', 13951],
        ['Jambi', 38643],
        ['Jawa Barat', 1173731],
        ['Jawa Tengah', 636409],
        ['Jawa Timur', 601545],
        ['Kalimantan Barat', 65605],
        ['Kalimantan Selatan', 87476],
        ['Kalimantan Tengah', 58217],
        ['Kalimantan Timur', 209017],
        ['Kalimantan Utara', 45417],
        ['ID-BB', 66144],
        ['Kepulauan Riau', 70883],
        ['Lampung', 75485],
        ['ID-MA', 18736],
        ['Maluku Utara', 14595],
        ['Nusa Tenggara Barat', 36247],
        ['Nusa Tenggara Timur', 94415],
        ['Papua', 49927],
        ['ID-PB', 32170],
        ['Riau', 152648],
        ['Sulawesi Barat', 15601],
        ['Sulawesi Selatan', 144494],
        ['Sulawesi Tengah', 61099],
        ['Sulawesi Tenggara', 25693],
        ['Sulawesi Utara', 52770],
        ['Sumatera Barat', 104640],
        ['Sumatera Selatan', 82198],
        ['Sumatera Utara', 158866]
    ]);

    var options = {
        
        region: 'ID',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {minValue: 1.0e3, maxValue: 1.0e6, colors: ['#EF5941', '#2F1A41'] }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}
