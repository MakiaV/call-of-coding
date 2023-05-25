"use client";
import React from "react";
import styles from "./Main.module.css";

import Navbar from "../navbar/Navbar";
// import CoreDashboard from "../coreDashboard/CoreDashboard";
// import HardcoreDashboard from "../hardcoreDashboard/HardcoreDashboard";
// import LeagueDashboard from "../leagueDashboard/LeagueDashboard";

const Main = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div className="tab-content" id="pills-tabContent">
				{/* <CoreDashboard />
				<HardcoreDashboard />
				<LeagueDashboard /> */}
			</div>
		</div>
	);
};

export default Main;
