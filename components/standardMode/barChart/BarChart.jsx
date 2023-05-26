import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { teamPopularity } from "@/data";
import styles from "./BarChart.module.css";

const BarChart = () => {
	const [barData, setLineData] = useState({
		labels: teamPopularity.map((data) => data.name),
		datasets: [
			{
				label: "TEAMS POPULARITY",
				data: teamPopularity.map((data) => data.popularity),
				backgroundColor: ["rgba(143, 253, 115, 0.3)"],
			},
		],
	});
	const [options, setOptions] = useState({
		scales: {
			x: {
				ticks: {
					color: "#fff",
				},
			},
			y: {
				ticks: {
					color: "#fff",
				},
			},
		},
	});
	ChartJS.register(ArcElement, Tooltip, Legend);
	return (
		<div className={styles.container}>
			<Bar data={barData} options={options} />
		</div>
	);
};

export default BarChart;
