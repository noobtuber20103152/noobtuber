import React from 'react'
import { Line } from "react-chartjs-2"
import chartData from "./Chartdata"
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
function Leetcode() {
    return (
        <>
            <Line
                data={chartData}
                height={25} width={50}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                    }
                }} />
        </>
    )
}

export default Leetcode;