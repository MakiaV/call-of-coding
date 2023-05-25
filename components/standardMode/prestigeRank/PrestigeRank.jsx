import React from "react";
import styles from "./PrestigeRank.module.css";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";

const PrestigeRank = ({ recentDayData }) => {
	return (
		<div className={styles.container}>
			<div className={styles.rankStars}>
				<Image
					src={recentDayData.topLogo}
					alt="stars"
					width={70}
					height={60}
				/>
			</div>
			<div className={styles.prestigeData}>
				<div className={styles.prestigeDataLeft}>
					<Image
						src={recentDayData.levelLogo}
						alt="level"
						width={45}
						height={45}
					/>
					<div className={styles.gamerRank}>
						<span>{recentDayData.level}</span>
						<span>{recentDayData.grade}</span>
					</div>
				</div>
				<div className={styles.prestigeDataRight}>
					<div className={styles.gamerRank}>
						<span>{recentDayData.nextLevel}</span>
						<span>{recentDayData.nextLevel2}</span>
					</div>
					<IoIosArrowUp size={40} color="rgba(196, 192, 192, 0.5)" />
				</div>
			</div>
			<div className={styles.xpWrapper}>
				<div className={styles.xpBarContainer}>
					<div className={styles.xpBar}></div>
					<div
						className={styles.xpBarProgress}
						style={{ width: `${recentDayData.nextLevelProcent}` }}
					></div>
				</div>
				<div className={styles.xpData}>
					<div className={styles.xpDataItem}>
						<span>CURRENT XP:</span>
						<span>{recentDayData.currentXp}</span>
					</div>
					<div className={styles.xpDataItem}>
						<span>XP NEEDED:</span>
						<span>{recentDayData.neededXp}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrestigeRank;
