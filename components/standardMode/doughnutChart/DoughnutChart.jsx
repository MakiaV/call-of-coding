import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import styles from "./DoughnutChart.module.css";

const DoughnutChart = ({ summaryData }) => {
	ChartJS.register(ArcElement, Tooltip, Legend);
	const [doughnutData, setDoughnutData] = useState({
		datasets: [
			{
				data: [`${summaryData.loses}`, `${summaryData.wins}`],
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(143, 253, 115, .5)",
				],

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
			<div className={styles.doughnutData}>
				<Doughnut data={doughnutData} options={doughnutOptions} />

				<div className={styles.winRatio}>
					<span>{summaryData.winRatio}</span>
					<p>WINRATIO</p>
				</div>
			</div>
			<div className={styles.winsLoses}>
				<div className={styles.wins}>
					<div className={styles.winData}>
						<span className={styles.winDot}></span>
						<span>WINS</span>
					</div>
					<span className={styles.result}>{summaryData.wins}</span>
				</div>
				<div className={styles.loses}>
					<div className={styles.loseData}>
						<span className={styles.loseDot}></span>
						<span>LOSES</span>
					</div>
					<span className={styles.result}>{summaryData.loses}</span>
				</div>
			</div>
		</div>
	);
};

export default DoughnutChart;
