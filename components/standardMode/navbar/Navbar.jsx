import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import { BiSearch } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "../../../public/images/avatar.jpeg";
import Zombie from "../../../public/images/zombie-mode.png";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inputContainer}>
				<input
					type="text"
					className={styles.myInput}
					placeholder="Search for player"
				/>
				<BiSearch color="#fff" className={styles.searchIcon} />
			</div>
			<div
				className="nav nav-pills teamNav"
				id="pills-tab"
				role="tablist"
			>
				<div className="nav-item" role="presentation">
					<div
						className="active"
						id="pills-core-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-core"
						type="button"
						role="tab"
						aria-controls="pills-core"
						aria-selected="true"
					>
						<div className={styles.core}>CORE</div>
					</div>
				</div>
				<div className="nav-item" role="presentation">
					<div
						className="teamMember"
						id="pills-hardcore-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-hardcore"
						type="button"
						role="tab"
						aria-controls="pills-hardcore"
						aria-selected="false"
					>
						<div className={styles.hardcore}>HARDCORE</div>
					</div>
				</div>
				<div className="nav-item" role="presentation">
					<div
						className="teamMember"
						id="pills-league-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-league"
						type="button"
						role="tab"
						aria-controls="pills-league"
						aria-selected="false"
					>
						<div className={styles.league}>LEAGUE</div>
					</div>
				</div>
			</div>
			<div className={styles.gotoZombie}>
				<Link href="/zombie" className={styles.zombieModeLink}>
					<Image
						className={styles.zombieModeImg}
						src={Zombie}
						alt="zombie"
						width={80}
					/>
					<div className={styles.zombieMode}>ZOMBIE MODE</div>
				</Link>
			</div>
			<div className={styles.player}>
				<GrMail color="#fff" size={20} />
				<IoMdNotifications color="#fff" size={20} />
				<div className={styles.avatar}>
					<Image
						src={Avatar}
						alt="avatar"
						width={40}
						height={40}
						className={styles.avatarImg}
					/>
					<p className={styles.avatarOn}></p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
