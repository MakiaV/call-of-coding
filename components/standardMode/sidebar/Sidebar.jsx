"use client";

import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { MdDashboard, MdHome } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { GiAk47 } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import Image from "next/image";
import bullet from "../../../public/images/bullet-on-glas.png";

const Sidebar = () => {
	const [fire, setFire] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setFire(true);
		}, 3700);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<span>CALL</span>
				<span className={styles.logoOf}>OF</span>
				<span>CODING</span>
			</div>
			<div className={styles.sidebarItems}>
				<p className={styles.sidebarItem}>
					<MdHome color="#fff" size={30} /> <span>Home</span>
				</p>
				<p
					className={styles.sidebarItem}
					style={{ backgroundColor: "#041516" }}
				>
					<MdDashboard color="#fff" size={30} />
					<span>Dashboard</span>
				</p>
				<p className={styles.sidebarItem}>
					<IoShareSocial color="#fff" size={30} />
					<span>Social</span>
				</p>
				<p className={styles.sidebarItem}>
					<GiAk47 color="#fff" size={30} />
					<span>Player</span>
				</p>
				<p className={styles.sidebarItem}>
					<BiNews color="#fff" size={30} />
					<span>News</span>
				</p>
			</div>
			{fire && (
				<Image
					className={styles.bullet}
					src={bullet}
					alt="bullet"
					// width={260}
				/>
			)}
		</div>
	);
};

export default Sidebar;
