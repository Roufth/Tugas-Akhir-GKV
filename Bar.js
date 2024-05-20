const labels = [
    'Aceh', 'Bali', 'Banten', 'Bengkulu', 'DKI Jakarta', 'Daerah Istimewa Yogyakarta', 'Gorontalo', 
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
                        size: 40,
                        weight: 'bold' // Bold font for x-axis ticks
                    }
                }
            },
            y: {
                beginAtZero: true,
                stacked: true,
                ticks: {
                    font: {
                        size: 40,
                        weight: 'bold' // Bold font for y-axis ticks
                    }
                },
                barThickness: 'flex', // Set flexible bar thickness
                maxBarThickness: 25 // Max bar thickness to reduce space between bars
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
                        return `${label}: ${value} (${deathRate}% of total cases)`;
                    }
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 40,
                        weight: 'bold' // Bold font for legend labels
                    }
                }
            }
        },
        animation: {
            onComplete: () => {
                const ctx = myChart.ctx;
                ctx.font = Chart.helpers.fontString(32, 'bold', Chart.defaults.font.family);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                myChart.data.datasets.forEach((dataset, i) => {
                    const meta = myChart.getDatasetMeta(i);
                    if (dataset.label === 'Surviving Cases') {
                        meta.data.forEach((bar, index) => {
                            const deathRate = ((totalDeaths[index] / totalCases[index]) * 100).toFixed(2);
                            const barPosition = bar.getCenterPoint();
                            ctx.fillText(`${deathRate}%`, barPosition.x + bar.width / 2 + 10, barPosition.y); // Adjust position for better alignment
                        });
                    }
                });
            }
        }
    }
});
