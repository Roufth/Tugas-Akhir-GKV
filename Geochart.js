
   
      google.charts.load('current', {
        'packages':['geochart'],
        // Set the 'mapsApiKey' parameter if required.
        //'mapsApiKey': 'YOUR_API_KEY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Location', 'Total Cases'],
          ['Aceh', 19962180],
          ['Bali', 66247623],
          ['Banten', 100598017],
          ['Bengkulu', 12347482],
          ['DKI Jakarta', 545806047],
          ['Yogyakarta', 86090207],
          ['Gorontalo', 6746166],
          ['Indonesia', 2539484270],
          ['Jambi', 15700629],
          ['Jawa Barat', 439196053],
          ['Jawa Tengah', 273046506],
          ['Jawa Timur', 239912685],
          ['Kalimantan Barat', 23403342],
          ['Kalimantan Selatan', 39485248],
          ['Kalimantan Tengah', 25507275],
          ['Kalimantan Timur', 89582475],
          ['Kalimantan Utara', 18782628],
          ['ID-BB', 26613493],
          ['Kepulauan Riau', 29043850],
          ['Lampung', 28891786],
          ['ID-MA', 9046656],
          ['Maluku Utara', 6781984],
          ['Nusa Tenggara Barat', 15887423],
          ['Nusa Tenggara Timur', 34710372],
          ['Papua', 22285548],
          ['ID-PB', 13634548],
          ['Riau', 68594950],
          ['Sulawesi Barat', 6865029],
          ['Sulawesi Selatan', 66922249],
          ['Sulawesi Tengah', 24193556],
          ['Sulawesi Tenggara', 12244125],
          ['Sulawesi Utara', 21715953],
          ['Sumatera Barat', 49292155],
          ['Sumatera Selatan', 34483096],
          ['Sumatera Utara', 60912221],


        ]);

        

        var options = {
          region: 'ID', // Country code for Indonesia
          displayMode: 'regions',
          resolution: 'provinces',
          colorAxis: {minValue: 5.0e6, maxValue: 500.0e6, colors: ['EF5941', '2F1A41']}, // White to red gradient
          width: 900,
          height: 500
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);

      }
    
      google.charts.load('current', {
        'packages':['geochart'],
        // Set the 'mapsApiKey' parameter if required.
        //'mapsApiKey': 'YOUR_API_KEY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Location', 'Total Cases'],
          ['Aceh', 19962180],
          ['Bali', 66247623],
          ['Banten', 100598017],
          ['Bengkulu', 12347482],
          ['DKI Jakarta', 545806047],
          ['Yogyakarta', 86090207],
          ['Gorontalo', 6746166],
          ['Indonesia', 2539484270],
          ['Jambi', 15700629],
          ['Jawa Barat', 439196053],
          ['Jawa Tengah', 273046506],
          ['Jawa Timur', 239912685],
          ['Kalimantan Barat', 23403342],
          ['Kalimantan Selatan', 39485248],
          ['Kalimantan Tengah', 25507275],
          ['Kalimantan Timur', 89582475],
          ['Kalimantan Utara', 18782628],
          ['ID-BB', 26613493],
          ['Kepulauan Riau', 29043850],
          ['Lampung', 28891786],
          ['ID-MA', 9046656],
          ['Maluku Utara', 6781984],
          ['Nusa Tenggara Barat', 15887423],
          ['Nusa Tenggara Timur', 34710372],
          ['Papua', 22285548],
          ['ID-PB', 13634548],
          ['Riau', 68594950],
          ['Sulawesi Barat', 6865029],
          ['Sulawesi Selatan', 66922249],
          ['Sulawesi Tengah', 24193556],
          ['Sulawesi Tenggara', 12244125],
          ['Sulawesi Utara', 21715953],
          ['Sumatera Barat', 49292155],
          ['Sumatera Selatan', 34483096],
          ['Sumatera Utara', 60912221],


        ]);

        

        var options = {
          region: 'ID', // Country code for Indonesia
          displayMode: 'regions',
          resolution: 'provinces',
          colorAxis: {minValue: 5.0e6, maxValue: 500.0e6, colors: ['EF5941', '2F1A41']}, // White to red gradient
          width: 900,
          height: 500
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);

      }
    