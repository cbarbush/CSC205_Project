const options1 = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "KC28",
            data: [3,4,5,1,1,3,4,5,3,3,4,4,4,3,2,5,1,5,5,2]
          }
    ]
}

const options2 = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "EJ34",
            data: [2, 4, 1, 5, 3, 1, 4, 2, 5, 3, 2, 4, 1, 3, 5, 1, 3, 4, 2, 5]
          }
    ]
}

const options3 = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "JD20",
            data: [5, 2, 1, 4, 3, 1, 3, 2, 4, 5, 2, 1, 4, 3, 5, 1, 4, 2, 3, 5]
          }
    ]
}

const teamData = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "Eagles",
            data: [4.2, 4.6, 3.1, 2.2, 4.9, 1.8, 3.8, 2.1, 4.2, 3.4, 2.2, 1.7, 4.5, 3.4, 4.9, 1.2, 4.1, 2.3, 3.8, 4.6]
          }
    ]
}

const leagueData = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "League Average",
            data: [4.7, 2, 1, 3.2, 3, 1, 3.8, 2, 4.5, 5, 2, 1.4, 4, 3.6, 5, 1, 4.2, 2, 3.9, 5]
          }
    ]
}

const ageData1 = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "6/7",
            data: [2.5, 4, 1, 3, 3.2, 1, 3.7, 2, 4.1, 5, 2, 1.3, 4, 3.9, 5, 1, 4.6, 2, 3.4, 5]
          }
    ]
}

const ageData2 = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "7/8",
            data: [5, 2, 1.8, 4.3, 3, 1.5, 3.2, 2.7, 4, 5, 2, 1.2, 4.1, 3, 5, 1.6, 4, 2.9, 3.4, 5]
          }
    ]
}

const ageData3 = {
    chart: {
        height: 450,
        width: '1000px',
        height: '150px',
        type: 'heatmap',
        background: '#f4f4f4',
        foreColor: '#333',
        toolbar: {
            show: false
          },
          zoom: {
            enabled: false,
          }
    },
    
    series: [
        {
            name: "8/9",
            data: [4.2, 2.8, 1, 3, 3.5, 1.2, 3.7, 2, 4.6, 5, 2.1, 1, 4, 3.3, 5, 1.4, 4.9, 2, 3, 5]
          }
    ]
}

const chart1 = new ApexCharts(document.querySelector('#chart1'), options1);
const chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
const chart3 = new ApexCharts(document.querySelector('#chart3'), options3);
const teamChart = new ApexCharts(document.querySelector('#teamChart'), teamData)
const leagueChart = new ApexCharts(document.querySelector('#leagueChart'), leagueData)
const ageChart1 = new ApexCharts(document.querySelector('#ageChart1'), ageData1);
const ageChart2 = new ApexCharts(document.querySelector('#ageChart2'), ageData2);
const ageChart3 = new ApexCharts(document.querySelector('#ageChart3'), ageData3);

chart1.render();
chart2.render();
chart3.render();
teamChart.render();
leagueChart.render();
ageChart1.render();
ageChart2.render();
ageChart3.render();