import React from "react";
import RecentDay from "../recentDay/RecentDay";
import PrestigeRank from "../prestigeRank/PrestigeRank";
import { MdKeyboardArrowDown, MdOutlineMessage } from "react-icons/md";
import Image from "next/image";
import LineChartComponent from "../lineChart/LineChartComponent";
import DoughnutChart from "../doughnutChart/DoughnutChart";
import styles from "./CoreDashboard.module.css";
import { friends } from "@/data";
import FriendsList from "../friendsList/FriendsList";
import RecentMach from "../recentMatch/RecentMach";

const CoreDashboard = () => {
	return (
		<div
			className="tab-pane fade show active"
			id="pills-core"
			role="tabpanel"
			aria-labelledby="pills-core-tab"
			tabIndex="0"
		>
			<RecentMach />
			<div className={styles.prestigeContainer}>
				<PrestigeRank />
				<RecentDay />
			</div>
			<div className={styles.summaryContainer}>
				<div className={styles.summary}>
					<div className={styles.summaryNav}>
						<div>SUMMARY</div>

						<div className={styles.gameDate}>
							<MdKeyboardArrowDown />
							<span>APRIL</span>
						</div>
					</div>
					<div className={styles.summaryCharts}>
						<div className={styles.doughnutChart}>
							<DoughnutChart />
						</div>
						<div className={styles.lineChart}>
							<LineChartComponent />
						</div>
					</div>
				</div>
				<FriendsList />
			</div>
		</div>
	);
};

export default CoreDashboard;
