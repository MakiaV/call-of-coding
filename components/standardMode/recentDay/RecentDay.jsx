import React from "react";
import styles from "./RecentDay.module.css";

const RecentDay = ({ recentDayData }) => {
	return (
		<div className={styles.container}>
			<p>TODAY</p>
			<div className={styles.todayData}>
				<div className={styles.todayDataItem}>
					<span>{recentDayData.kills}</span>
					<span>Kills</span>
				</div>
				<div className={styles.todayDataItem}>
					<span>{recentDayData.ratio}</span>
					<span>Kill/Death</span>
				</div>
				<div className={styles.todayDataItem}>
					<span>{recentDayData.time}</span>
					<span>Game Time</span>
				</div>
				<div className={styles.todayDataItem}>
					<span>{recentDayData.win}</span>
					<span>win</span>
				</div>
			</div>
		</div>
	);
};

export default RecentDay;
