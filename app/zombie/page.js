"use client";
import Sidebar from "@/components/zombieMode/sidebar/Sidebar";
import styles from "./zombie.module.css";
import Main from "@/components/zombieMode/main/Main";
import { useEffect, useRef } from "react";
import zombies from "../../public/images/zombies.png";
import Image from "next/image";

export default function Zombie() {
	const reactAudioPlayer = useRef();

	useEffect(() => {
		setTimeout(() => {
			reactAudioPlayer.current.play();
		}, 3000);
	}, []);
	return (
		<div className={styles.container}>
			<audio ref={reactAudioPlayer} src="/sounds/zombie.mp3"></audio>
			<div className={styles.main}>
				<Sidebar />
				<Main />
			</div>
			<Image
				className={styles.zombiesImg}
				src={zombies}
				alt="zombies"
				width={400}
			/>
		</div>
	);
}
