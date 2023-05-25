import React from "react";
import RecentDay from "../recentDay/RecentDay";
import PrestigeRank from "../prestigeRank/PrestigeRank";
import { MdKeyboardArrowDown } from "react-icons/md";
import LineChartComponent from "../lineChart/LineChartComponent";
import DoughnutChart from "../doughnutChart/DoughnutChart";
import styles from "./CoreDashboard.module.css";
import FriendsList from "../friendsList/FriendsList";
import RecentMach from "../recentMatch/RecentMach";
import { coreRecentDay, coreRecentMatch, coreSummary } from "@/data";

const CoreDashboard = () => {
	return (
		<div
			className="tab-pane fade show active"
			id="pills-core"
			role="tabpanel"
			aria-labelledby="pills-core-tab"
			tabIndex="0"
		>
			<RecentMach matchData={coreRecentMatch} />
			<div className={styles.prestigeContainer}>
				<PrestigeRank recentDayData={coreRecentDay} />
				<RecentDay recentDayData={coreRecentDay} />
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
							<DoughnutChart summaryData={coreSummary} />
						</div>
						<div className={styles.lineChart}>
							<LineChartComponent summaryData={coreSummary} />
						</div>
					</div>
				</div>
				<FriendsList />
			</div>
		</div>
	);
};

export default CoreDashboard;
