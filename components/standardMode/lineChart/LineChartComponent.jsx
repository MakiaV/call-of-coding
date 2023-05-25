import React, { useState } from "react";
import styles from "./LineChart.module.css";
import LineChart from "../charts/LineChart";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

import { Line } from "react-chartjs-2";
import { summary } from "@/data";

const LineChartComponent = () => {
	const bgc = "linear-gradient(red, yellow)";
	const [lineData, setLineData] = useState({
		// labels: ["20.04", "21.04", "22.04"],
		labels: summary.currentMonth.map((data) => data.day),
		datasets: [
			{
				label: "KILL/DEATH RATIO",
				// data: [1.2, 1.5, 1.1],
				data: summary.currentMonth.map((data) => data.kdRatio),
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
