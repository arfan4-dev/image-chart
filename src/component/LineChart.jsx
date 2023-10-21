import { Line } from 'react-chartjs-2';
import 'chart.js/auto'


const LineChart = ({dataArr}) => {


  const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'];
const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: dataArr,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderColor: 'rgba(75, 192, 192, 1)',
      pointBorderWidth: 2,
      pointRadius: 5,
    }]
  };
  

const options = {
  scales: {
    x: {
      display: true, // Display the x-axis
      title: {
        display: true,
        text: 'X-Axis Label',
      },
    },
    y: {
      display: true, // Display the y-axis
      title: {
        display: true,
        text: 'Y-Axis Label',
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line Chart Example',
    },
  },
};
  return (
    <div className=''>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
