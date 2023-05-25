import React from "react";
import styles from "./RecentDay.module.css";

const RecentDay = () => {
	return (
		<div className={styles.container}>
			<p>Today</p>
			<div className={styles.todayData}>
				<div className={styles.todayDataItem}>
					<p>258</p>
					<span>Kills</span>
				</div>
				<div className={styles.todayDataItem}>
					<p>1.72</p>
					<span>Kill/Death</span>
				</div>
				<div className={styles.todayDataItem}>
					<p>5h 28m</p>
					<span>Game Time</span>
				</div>
				<div className={styles.todayDataItem}>
					<p>73%</p>
					<span>win</span>
				</div>
			</div>
		</div>
	);
};

export default RecentDay;
