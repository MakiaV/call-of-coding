import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = ({ lineData }) => {
	return <Line data={lineData} />;
};

export default LineChart;
