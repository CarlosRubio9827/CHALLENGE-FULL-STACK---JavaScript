import React, { useMemo } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
  );
  
const LineChart=(props)=> {


    const listExpense = props.listExpense;
    const listIncome = props.listIncome;

    const expense = [];
    const income = [];
    const labels = [1, 2, 3, 4, 5];

    console.log('Start list Expense')
    listExpense.forEach((i)=>{
      console.log(i.amountOperation)
      expense.push(i.amountOperation)
    })
    console.log('End list Expense')
    
    console.log('Start list Income')
    listIncome.forEach((i)=>{
      console.log(i.amountOperation)
      income.push(i.amountOperation)
    })
    console.log('End list Income')



    const options = {
    fill: true,
    responsive: true,
//   scales: {
//     y: {
//       min: 0,
//     },
//   },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const data = 
 {
    labels,
   datasets: [
     {   
        type: 'bar',
        label: `Expense`,
        data: expense,
          tension: 0.3,
        //    borderColor: "rgb(75, 192, 192)",
        //   pointRadius: 6,
          //  pointBackgroundColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(188, 20, 20, 0.5)",
        borderWidth: 0.5,
      },
      {
        type: 'bar',
        label: "Income",
        // fill: true,
        tension: 0.3,
        data: income,
        borderColor: "green",
        backgroundColor: "rgb(28, 161, 35, 0.5)",
        pointRadius: 2,
        borderWidth: 0.5,
     },
   ],
  //  labels,     
 };
//   console.log(props.x);

  return (
      <Chart type='bar' data={data} options={options} />
  )
}

export default LineChart
