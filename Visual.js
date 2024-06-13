// Plotly chart
var LINE = document.getElementById('lineplot');
var data = [
    {
        x: ["2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10", "2020-11", "2020-12",
            "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10",
            "2021-11", "2021-12", "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08",
            "2022-09"],
        y: [1528, 10118, 26473, 56385, 108376, 174796, 287008, 410088, 538883, 743198,
            1078314, 1334634, 1511712, 1668368, 1821703, 2178272, 3409658, 4089801, 4215104, 4244358,
            4256409, 4262720, 4353770, 5564448, 6012818, 6046796, 6054973, 6088460, 6207098, 6358084,
            6405044],
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Total Cases',
        line: { color: '#F05941' }
    },
    {
        x: ["2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10", "2020-11", "2020-12",
            "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10",
            "2021-11", "2021-12", "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08",
            "2022-09"],
        y: [136, 792, 1613, 2876, 5131, 7417, 10740, 13869, 16945, 22138,
            29998, 36166, 40858, 45521, 50578, 58491, 94119, 133023, 141939, 143405,
            143830, 144094, 144320, 148335, 155089, 156257, 156591, 157437, 156993, 157566,
            157876],
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Total Deaths',
        line: { color: '#872341' }
    }
];

var layout = {
    title: {
        text: 'Total Kasus dan Kematian Covid 19 di Indonesia',
        font: {
            size: 24,
            family: 'Arial, sans-serif',
            weight: 'bold'
        }
    },
    xaxis: {
        title: {
            text: 'Tanggal',
            font: {
                size: 18,
                family: 'Arial, sans-serif',
                weight: 'bold'
            }
        }
    },
    yaxis: {
        title: {
            text: 'Jumlah',
            font: {
                size: 18,
                family: 'Arial, sans-serif',
                weight: 'bold'
            }
        }
    }
};

Plotly.newPlot(LINE, data, layout);

// Chart.js chart
const labels = [
    'Aceh', 'Bali', 'Banten', 'Bengkulu', 'DKI Jakarta', 'DI Yogyakarta', 'Gorontalo', 
    'Jambi', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Kalimantan Barat', 
    'Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Utara', 
    'Kepulauan Bangka Belitung', 'Kepulauan Riau', 'Lampung', 'Maluku', 'Maluku Utara', 
    'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Papua', 'Papua Barat', 'Riau', 'Sulawesi Barat', 
    'Sulawesi Selatan', 'Sulawesi Tengah', 'Sulawesi Tenggara', 'Sulawesi Utara', 'Sumatera Barat', 
    'Sumatera Selatan', 'Sumatera Utara'
];

const totalCases = [
    44038, 166831, 333875, 29173, 1412511, 224307, 13951, 38643, 1173731, 636409, 601545, 
    65605, 87476, 58217, 209017, 45417, 66144, 70883, 75485, 18736, 14595, 36247, 94415, 49927, 
    32170, 152648, 15601, 144494, 61099, 25693, 52770, 104640, 82198, 158866
];

const totalDeaths = [
    2223, 4731, 2950, 522, 15513, 5928, 487, 889, 15937, 33489, 31764, 1132, 2583, 1565, 
    5726, 860, 1616, 1888, 4186, 295, 334, 902, 1527, 580, 385, 4452, 394, 2485, 1733, 569, 1213, 
    2371, 3376, 3288
];

const survivingCases = totalCases.map((cases, index) => cases - totalDeaths[index]);

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Total Deaths',
                data: totalDeaths,
                backgroundColor: '#872341',
                stack: 'Stack 0'
            },
            {
                label: 'Surviving Cases',
                data: survivingCases,
                backgroundColor: '#FFA500',
                stack: 'Stack 0'
            }
        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                stacked: true,
                ticks: {
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            },
            y: {
                beginAtZero: true,
                stacked: true,
                ticks: {
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                },
                barThickness: 'flex',
                maxBarThickness: 25
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        const total = totalCases[context.dataIndex];
                        const deathRate = ((totalDeaths[context.dataIndex] / total) * 100).toFixed(2);
                        return `${label}: ${value} (${deathRate}% of total)`;
                    }
                }
            }
        }
    }
});

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
        ['ID-JK', 1412511],
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
        colorAxis: {minValue: 1.0e3, maxValue: 1.5e6, colors: ['#EF5941', '#2F1A41'] }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}
