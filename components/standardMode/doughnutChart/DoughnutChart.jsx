import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import styles from "./DoughnutChart.module.css";

import { summary } from "@/data";

const DoughnutChart = () => {
	ChartJS.register(ArcElement, Tooltip, Legend);
	const [doughnutData, setDoughnutData] = useState({
		// labels: [`Wins: ${summary.wins}`, `Wins: ${summary.loses}`],
		datasets: [
			{
				// label: "Wins and Loses",
				data: [`${summary.loses}`, `${summary.wins}`],
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(143, 253, 115, .5)",
				],
				// backgroundColor: [
				// 	"rgba(255, 99, 132, 0.4)",
				// 	"rgba(54, 162, 235, 0.4)",
				// ],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(143, 253, 115, 1)",
				],

				borderWidth: 0.2,
			},
		],
	});
	const doughnutOptions = {
		cutout: "80%",
	};
	return (
		<div className={styles.container}>
			<Doughnut data={doughnutData} options={doughnutOptions} />
			<div className={styles.winRatio}>
				<span>{summary.winRatio}</span>
				<p>WINRATIO</p>
			</div>
			<div className={styles.winsLoses}>
				<div className={styles.wins}>
					<div className={styles.winData}>
						<p className={styles.winDot}></p>
						<span>WINS</span>
					</div>
					<span>{summary.wins}</span>
				</div>
				<div className={styles.loses}>
					<div className={styles.loseData}>
						<p className={styles.loseDot}></p>
						<span>LOSES</span>
					</div>
					<span>{summary.loses}</span>
				</div>
			</div>
		</div>
	);
};

export default DoughnutChart;
