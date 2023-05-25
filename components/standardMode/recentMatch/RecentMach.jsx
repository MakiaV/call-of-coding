import React from "react";
import styles from "./RecentMatch.module.css";
import Image from "next/image";
import avatar from "../../../public/images/avatar.jpeg";
import ak47 from "../../../public/images/ak47.png";

const RecentMach = () => {
	return (
		<div className={styles.container}>
			<div className={styles.rmLeft}>
				<div className={styles.gameMode}>
					<p>Recent match</p>
					<p>Domination</p>
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
							<span>Win</span>
						</div>
					</div>
					<div className={styles.matchData}>
						<div className={styles.matchDataItem}>
							<span>18</span>
							<span>Kills</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>5</span>
							<span>Deaths</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>3</span>
							<span>Headshots</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>4</span>
							<span>Assits</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>6,239</span>
							<span>Xp earned</span>
						</div>
						<div className={styles.matchDataItem}>
							<span>10</span>
							<span>Time played</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.rmRight}>
				<p>Main weapon</p>
				<Image src={ak47} alt="ak47" width={200} />
			</div>
		</div>
	);
};

export default RecentMach;
