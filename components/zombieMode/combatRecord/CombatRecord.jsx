import React from "react";
import styles from "./CombatRecord.module.css";
import { zombieCombatRecord } from "@/data";
import Image from "next/image";

const CombatRecord = () => {
	return (
		<div className={styles.container}>
			<span className={styles.title}>COMBAT RECORD</span>
			<div className={styles.wrapper}>
				<div className={styles.levelContainer}>
					<Image
						src="/images/zombies-level.png"
						alt="level"
						width={150}
						height={150}
					/>
					<span>LEVEL</span>
					<span>{zombieCombatRecord.level}</span>
				</div>
				<div className={styles.dataContainer}>
					<div className={styles.dataItem}>
						<div className={styles.dataItemImg}>
							<Image
								src="/images/kill.png"
								alt="kills"
								width={50}
								height={50}
							/>
						</div>
						<table style={{ width: "100%" }}>
							<thead>
								<tr
									style={{
										backgroundColor:
											"rgba(255, 99, 132, 0.5)",
									}}
								>
									<th>KILLS</th>
									<th>GAMES PLAYED</th>
									<th>SCENES SURVIVED</th>
								</tr>
							</thead>
							<tbody>
								<tr
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.3)",
									}}
								>
									<td>{zombieCombatRecord.kills}</td>
									<td>{zombieCombatRecord.gamePlayed}</td>
									<td>{zombieCombatRecord.scenesSurvived}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className={styles.dataItem}>
						<div className={styles.dataItemImg}>
							<Image
								src="/images/headshot.png"
								alt="headshot"
								width={50}
								height={50}
							/>
						</div>
						<table style={{ width: "100%" }}>
							<thead>
								<tr
									style={{
										backgroundColor:
											"rgba(255, 99, 132, 0.5)",
									}}
								>
									<th>HEADSHOTS</th>
									<th>SCORE PER MINUTE</th>
									<th>HIGHEST SCENE</th>
								</tr>
							</thead>
							<tbody>
								<tr
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.3)",
									}}
								>
									<td>{zombieCombatRecord.headshots}</td>
									<td>{zombieCombatRecord.scorePerMinute}</td>
									<td>{zombieCombatRecord.highestScene}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className={styles.dataItem}>
						<div className={styles.dataItemImg}>
							<Image
								src="/images/revive.webp"
								alt="revive"
								width={50}
								height={50}
							/>
						</div>
						<table style={{ width: "100%" }}>
							<thead>
								<tr
									style={{
										backgroundColor:
											"rgba(255, 99, 132, 0.5)",
									}}
								>
									<th>REVIVES</th>
									<th>AVG.GAME SCORE</th>
									<th>AVG.SCENES/GAME</th>
								</tr>
							</thead>
							<tbody>
								<tr
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.3)",
									}}
								>
									<td>{zombieCombatRecord.revives}</td>
									<td>{zombieCombatRecord.avgGameScore}</td>
									<td>{zombieCombatRecord.avgScenesGame}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className={styles.dataItem}>
						<div className={styles.dataItemImgLast}>
							<Image
								src="/images/down.png"
								alt="down"
								width={50}
								height={50}
							/>
						</div>
						<table style={{ width: "100%" }}>
							<thead>
								<tr
									style={{
										backgroundColor:
											"rgba(255, 99, 132, 0.5)",
									}}
								>
									<th>DOWNS</th>
									<th>PERKS USED</th>
									<th>DOORS OPENED</th>
								</tr>
							</thead>
							<tbody>
								<tr
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.3)",
									}}
								>
									<td>{zombieCombatRecord.downs}</td>
									<td>{zombieCombatRecord.perksUsed}</td>
									<td>{zombieCombatRecord.doorsOpened}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<span className={styles.time}>
				Played {zombieCombatRecord.timePlayed}
			</span>
		</div>
	);
};

export default CombatRecord;
