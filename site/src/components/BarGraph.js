// BarGraph.js

import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarGraph = ({ income, expense, years }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current){
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Income',
            data: income,
            backgroundColor: '#00A76F',
            borderColor: '#00A76F',
            borderWidth: 0,
          },
          {
            label: 'Expense',
            data: expense,
            backgroundColor: '#FFAB00',
            borderColor: '#FFAB00',
            borderWidth: 0,
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
        maintainAspectRatio: false, 
      },
    });

    return () => {
      if (chartInstance.current){
        chartInstance.current.destroy();
      }
    }
  }, [income, expense, years]);

  return (
    <div className='bar-graph'>
      <canvas ref={chartRef}/>
    </div>
  );
};

export default BarGraph;
