import React from "react";
import {Line} from "react-chartjs-2"
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
)

export default function Chart({arr=[],currency,days}){

    const prices = [1,2,34]
    const date = ["12/3/23", "12/7/23", "12/11/33"]

    for(let i =0; i<arr.length; i++){
        if(days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString())
      else date.push(new Date(arr[i][0]).toLocaleDateString())
       prices.push(arr[i][1])
    }
   
    return(
        <>
       <Line options={{
        responsive: true,
       }} 
      const data={{
        labels: date,
        datasets:[{
            label: `Price in ${currency}`,
            data: prices,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.5)"
        }]
       }}
       />
        </>
    )
}