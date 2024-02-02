// Code From ChatGPT
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const Graph = (props) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        let myChart;
        const dataLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const dataValues = props.values;
    
        // Function to create or update the chart
        const createOrUpdateChart = () => {
          // Destroy existing chart if it exists
          if (myChart) {
            myChart.destroy();
          }
    
          // Create a new chart
          myChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: dataLabels,
              datasets: [{
                data: dataValues,
                borderWidth: 2,
                borderColor: props.color,
                pointRadius: 0,
              }],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: false,
                  text: ''
                },
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  type: 'category',
                  labels: dataLabels,
                  beginAtZero: true,
                  grid: {
                    display: false,
                  },
                display: false
                },
                y: {
                  display: false,
                  grid: {
                    display: false,
                  },
                  suggestedMin: 0,
                  suggestedMax: Math.max(...dataValues) + 10, // Adjust based on your dataset
                },
              },
            },
          });
        };
    
        // Initial chart creation
        createOrUpdateChart();
    
        // Cleanup function to destroy the chart when the component unmounts
        return () => {
          if (myChart) {
            myChart.destroy();
          }
        };
      }, []);

    return (
      <div className={props.class}>
        <canvas ref={chartRef} />
      </div>
    );
};

export default Graph;