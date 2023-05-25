import Image from "next/image";
import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import styles from "./FriendsList.module.css";
import { friends } from "@/data";

const FriendsList = () => {
	return (
		<div className={styles.friendList}>
			<span className={styles.title}>FRIEND LIST</span>
			<div className={styles.friendContainer}>
				{friends.map((friend) => (
					<div key={friend.id} className={styles.friend}>
						<div className={styles.friendData}>
							<div className={styles.friendDataOnOff}>
								<Image
									src={friend.avatar}
									alt="avatar"
									width={40}
									height={40}
									className={styles.avatarImg}
								/>
								<p
									className={styles.avatarOn}
									style={
										friend.online
											? {
													backgroundColor: "#8ffd73",
											  }
											: {
													backgroundColor: "#fff",
											  }
									}
								></p>
							</div>
							<span>{friend.name}</span>
						</div>

						<MdOutlineMessage
							size={20}
							className={styles.friendMsg}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default FriendsList;
