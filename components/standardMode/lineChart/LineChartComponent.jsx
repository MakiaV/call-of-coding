import React, { useState } from "react";
import styles from "./LineChart.module.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

import { Line } from "react-chartjs-2";

const LineChartComponent = ({ summaryData }) => {
	const bgc = "linear-gradient(red, yellow)";
	const [lineData, setLineData] = useState({
		labels: summaryData.currentMonth.map((data) => data.day),
		datasets: [
			{
				label: "KILL/DEATH RATIO",
				data: summaryData.currentMonth.map((data) => data.kdRatio),
				backgroundColor: ["rgba(143, 253, 115, 0.3)"],
				fill: true,
				tension: 0.5,
			},
		],
	});
	ChartJS.register(ArcElement, Tooltip, Legend);

	return (
		<div className={styles.container}>
			<Line data={lineData} />
		</div>
	);
};

export default LineChartComponent;
