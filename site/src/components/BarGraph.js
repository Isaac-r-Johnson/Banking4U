// BarGraph.js

import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarGraph = ({ income, expense, years }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Income',
            data: income,
            backgroundColor: '#00A76F',
            borderColor: '#00A76F',
            borderWidth: 1,
          },
          {
            label: 'Expense',
            data: expense,
            backgroundColor: '#FFAB00',
            borderColor: '#FFAB00',
            borderWidth: 1,
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [income, expense, years]);

  return (
    <div style={{ width: '100%', margin: '20px 0' }}>
      <canvas ref={chartRef} style={{ width: '100%'}}/>
    </div>
  );
};

export default BarGraph;
