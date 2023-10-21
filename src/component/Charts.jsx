import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import Navbar from './Navbar';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { Context } from './ContextApp';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const Charts = () => {
  const {currentUser}=useContext(Context);
  const dataUrl=currentUser.photoURL.length
  const dataArr=dataUrl.toString().split('')
  console.log('currentUser.photoURL',dataArr);
  const [data, setData] = useState({
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Upload Ratio',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
     
    ],
  });


  useEffect(() => {
    const fetchData =  () => {
      

      setData({
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Upload Ratio',
            data: dataArr,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(99, 132, 0.5)',
          },
          
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center h-[600px]">
        <h2 className="text-3xl mb-4 font-bold text-center text-blue-700">Chart 1</h2>
        <div className=" flex justify-center">
          <Bar data={data} options={options} />
        </div>
      </div>

      Chart 2

<div className='flex justify-center'>
     <LineChart dataArr={dataArr}/>
</div>

      Chart 3

      <div className="flex justify-center">
       <PieChart dataArr={dataArr}/>
      </div>
    </div>
  );
};

export default Charts;