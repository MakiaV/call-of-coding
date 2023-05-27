import React from "react";
import styles from "./LeagueDashboard.module.css";
import Image from "next/image";
import { leagueSchedule } from "../../../data";
import LeagueSchedule from "../leagueSchedule/LeagueSchedule";
import BarChart from "../barChart/BarChart";
const LeagueDashboard = () => {
	return (
		<div
			className="tab-pane fade"
			id="pills-league"
			role="tabpanel"
			aria-labelledby="pills-league-tab"
			tabIndex="0"
		>
			<div className={styles.container}>
				<Image
					className={styles.scheduleImg}
					src="/images/league.png"
					alt="league"
					width={250}
					height={60}
				/>
				<div className={styles.scheduleWrapper}>
					{leagueSchedule.map((schedule) => (
						<LeagueSchedule
							key={schedule.id}
							leagueData={schedule}
						/>
					))}
				</div>
				<div className={styles.teamPopularityWrapper}>
					<div className={styles.teamPopularity}>
						<span>TEAMS POPULARITY</span>
						<BarChart />
					</div>
					<div className={styles.lastGame}>
						<span>LAST GAME</span>
						<video
							width="420"
							height="340"
							autoplay="autoplay"
							muted
							loop
							controls
						>
							<source src="/video/video.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeagueDashboard;
