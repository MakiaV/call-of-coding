import React from "react";
import styles from "./RecentMatch.module.css";
import Image from "next/image";
import avatar from "../../../public/images/avatar.jpeg";

const RecentMach = ({ matchData }) => {
	return (
		<div className={styles.container}>
			<div className={styles.rmLeft}>
				<div className={styles.gameMode}>
					<span>Recent match:</span>
					<span className={styles.gameModeTitle}>
						{matchData.gameMode}
					</span>
				</div>
				<div className={styles.matchDataWrapper}>
					<div className={styles.gamerData}>
						<Image
							className={styles.gamerDataImg}
							src={avatar}
							alt="avatar"
							width={50}
							height={50}
						/>
						<div className={styles.nameStatus}>
							<span>MakiaV</span>
							<span
								style={
									matchData.status === "Win"
										? {
												color: "rgba(143, 253, 115, 0.5)",
												fontWeight: "800",
										  }
										: {
												color: "rgba(255, 99, 132, 0.5)",
												fontWeight: "800",
										  }
								}
							>
								{matchData.status}
							</span>
						</div>
					</div>
					<div className={styles.matchData}>
						<div className={styles.matchDataItem}>
							<span>{matchData.kills}</span>
							<span>Kills</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>{matchData.deaths}</span>
							<span>Deaths</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>{matchData.headshots}</span>
							<span>Headshots</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>{matchData.assits}</span>
							<span>Assits</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>{matchData.xp}</span>
							<span>Xp earned</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>{matchData.time}</span>
							<span>Time played</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.rmRight}>
				<p>Main weapon</p>
				<Image
					className={styles.weaponImg}
					src={matchData.weapon}
					alt="weapon"
					width={200}
					height={80}
				/>
			</div>
		</div>
	);
};

export default RecentMach;
