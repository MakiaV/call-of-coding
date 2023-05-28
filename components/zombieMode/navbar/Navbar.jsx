import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import { BiSearch } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { IoMdNotifications } from "react-icons/io";
import avatar from "../../../public/images/avatar.jpeg";
import standard from "../../../public/images/standard-mode.png";

import Link from "next/link";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.gotoZombie}>
				<Link href="/" className={styles.zombieModeLink}>
					<Image
						className={styles.zombieModeImg}
						src={standard}
						alt="zombie"
						width={80}
					/>
					<div className={styles.zombieMode}>STANDARD MODE</div>
				</Link>
			</div>
			<div className={styles.player}>
				<GrMail color="#fff" size={20} />
				<IoMdNotifications color="#fff" size={20} />
				<div className={styles.avatar}>
					<Image
						src={avatar}
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
