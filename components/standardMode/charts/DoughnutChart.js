import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ doughnutData, doughnutOptions }) => {
	return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

export default DoughnutChart;
