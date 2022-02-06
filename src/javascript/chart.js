// Function call chart with the parameters of days and the temperatures
const chart = (dayLabel, dailyTemperature) => {
    // const that gets the canvas id myChart
    const ctx = document.getElementById('myChart').getContext('2d');
    // let myChart  with Chart data inside
    return new chart(ctx, {
        // type = bar chart
        type: 'bar',
        // Data = whats inside the chart                  
        data: {
            // labels
            labels: dayLabel,
            datasets: [{
                label: 'Temperature',
                data: [dailyTemperature[0], 
                dailyTemperature[1], 
                dailyTemperature[2],
                dailyTemperature[3], 
                dailyTemperature[4], 
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

    }); 
}

export default chart;