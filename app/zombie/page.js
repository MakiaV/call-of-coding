"use client";
import Sidebar from "@/components/zombieMode/sidebar/Sidebar";
import styles from "./zombie.module.css";
import Main from "@/components/zombieMode/main/Main";

export default function Zombie() {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<Sidebar />
				<Main />
			</div>
		</div>
	);
}
