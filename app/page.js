"use client";
import styles from "./page.module.css";
import Sidebar from "../components/standardMode/sidebar/Sidebar";
import Main from "../components/standardMode/main/Main";
import { useEffect, useRef } from "react";
// import gunshoot from "../public/sounds/gunshoot.mp3";

export default function Home() {
	const reactAudioPlayer = useRef();

	useEffect(() => {
		reactAudioPlayer.current.play();
	}, []);

	return (
		<div className={styles.container}>
			<audio ref={reactAudioPlayer} src="/sounds/gunshoot.mp3"></audio>
			<div className={styles.main}>
				<Sidebar />
				<Main />
			</div>
		</div>
	);
}
