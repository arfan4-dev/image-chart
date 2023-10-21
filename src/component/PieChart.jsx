import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({dataArr}) => {
  // Define your data and options for the pie chart

  const data = {
    labels: ['upload Ratio', 'empty'],
    datasets: [
      {
        data: dataArr, // Example data values
        backgroundColor: ['green', 'blue',], // Example colors
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right', // You can change the legend position
      },
      title: {
        display: true,
        text: 'Pie Chart Example', // Title for the chart
      },
    },
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <div style={{ maxWidth: '400px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
