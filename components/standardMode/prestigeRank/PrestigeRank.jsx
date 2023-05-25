import React from "react";
import styles from "./PrestigeRank.module.css";
import Image from "next/image";
import rankStars from "../../../public/images/stars.webp";
import level from "../../../public/images/level.png";
import { IoIosArrowUp } from "react-icons/io";

const PrestigeRank = () => {
	return (
		<div className={styles.container}>
			<div className={styles.rankStars}>
				<Image src={rankStars} alt="stars" width={80} />
			</div>
			<div className={styles.prestigeData}>
				<div className={styles.prestigeDataLeft}>
					<Image src={level} alt="level" width={45} />
					<div className={styles.gamerRank}>
						<p>LEVEL 50</p>
						<span>COMMANDER</span>
					</div>
				</div>
				<div className={styles.prestigeDataRight}>
					<div className={styles.gamerRank}>
						<p>PRESTIGE 1</p>
						<span>PRIVATE 1</span>
					</div>
					<IoIosArrowUp size={40} color="#31372B" />
				</div>
			</div>
			<div className={styles.xpWrapper}>
				<div className={styles.xpBarContainer}>
					<div className={styles.xpBar}></div>
					<div className={styles.xpBarProgress}></div>
				</div>
				<div className={styles.xpData}>
					<div className={styles.xpDataLeft}>
						<span>CURRENT XP:</span>
						<span>1.455.678</span>
					</div>
					<div className={styles.xpDataRight}>
						<span>XP NEEDED:</span>
						<span>17.231</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrestigeRank;
