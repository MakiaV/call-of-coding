import React from "react";
import styles from "./LeagueSchedule.module.css";
import Image from "next/image";

const LeagueSchedule = ({ leagueData }) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{leagueData.name}</div>
			<div className={styles.onlineQuali}>
				<span>{leagueData.onlineQualiDate}</span>
				<span>ONLINE QUALIFIERS</span>
			</div>
			<div className={styles.tournament}>
				<span>{leagueData.tournamentDate}</span>
				<Image
					src={leagueData.tournamentLogo}
					alt="logo"
					width={120}
					height={50}
				/>
			</div>
		</div>
	);
};

export default LeagueSchedule;
