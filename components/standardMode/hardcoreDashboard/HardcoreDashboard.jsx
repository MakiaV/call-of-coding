import React from "react";
import styles from "./HardcoreDashboard.module.css";
import FriendsList from "../friendsList/FriendsList";
import LineChartComponent from "../lineChart/LineChartComponent";
import DoughnutChart from "../doughnutChart/DoughnutChart";
import { MdKeyboardArrowDown } from "react-icons/md";
import RecentDay from "../recentDay/RecentDay";
import PrestigeRank from "../prestigeRank/PrestigeRank";
import RecentMach from "../recentMatch/RecentMach";
import {
	hardcoreRecentDay,
	hardcoreRecentMatch,
	hardcoreSummary,
} from "@/data";

const HardcoreDashboard = () => {
	return (
		<div
			className="tab-pane fade"
			id="pills-hardcore"
			role="tabpanel"
			aria-labelledby="pills-hardcore-tab"
			tabIndex="0"
		>
			<RecentMach matchData={hardcoreRecentMatch} />
			<div className={styles.prestigeContainer}>
				<PrestigeRank recentDayData={hardcoreRecentDay} />
				<RecentDay recentDayData={hardcoreRecentDay} />
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
							<DoughnutChart summaryData={hardcoreSummary} />
						</div>
						<div className={styles.lineChart}>
							<LineChartComponent summaryData={hardcoreSummary} />
						</div>
					</div>
				</div>
				<FriendsList />
			</div>
		</div>
	);
};

export default HardcoreDashboard;
