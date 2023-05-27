"use client";
import React from "react";
import styles from "./Main.module.css";

import Navbar from "../navbar/Navbar";
import CombatRecord from "../combatRecord/CombatRecord";
import Image from "next/image";

const Main = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.mainWrapper}>
				<CombatRecord />
				<div className={styles.weaponDogWrapper}>
					<div className={styles.dog}>
						<span>WORST ENEMY</span>
						<Image
							src="/images/zombie-dog.png"
							alt="dog"
							width={200}
							height={200}
						/>
					</div>
					<div className={styles.weapon}>
						<span>MAIN WEAPON</span>
						<div className={styles.weaponWrapper}>
							<Image
								className={styles.weaponImg}
								src="/images/zombies-weapon.png"
								alt="weapon"
								width={200}
								height={150}
							/>
							<div className={styles.weaponDataContainer}>
								<div className={styles.weaponData}>
									<span>FIRE POWER</span>
									<div className={styles.xpBarContainer}>
										<div className={styles.xpBar}></div>
										<div
											className={styles.xpBarProgress}
											style={{
												width: "70%",
											}}
										></div>
									</div>
								</div>
								<div className={styles.weaponData}>
									<span>SPEED</span>
									<div className={styles.xpBarContainer}>
										<div className={styles.xpBar}></div>
										<div
											className={styles.xpBarProgress}
											style={{
												width: "80%",
											}}
										></div>
									</div>
								</div>
								<div className={styles.weaponData}>
									<span>ACCURACY</span>
									<div className={styles.xpBarContainer}>
										<div className={styles.xpBar}></div>
										<div
											className={styles.xpBarProgress}
											style={{
												width: "45%",
											}}
										></div>
									</div>
								</div>
								<div className={styles.weaponData}>
									<span>AMMO</span>
									<div className={styles.xpBarContainer}>
										<div className={styles.xpBar}></div>
										<div
											className={styles.xpBarProgress}
											style={{
												width: "30%",
											}}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
