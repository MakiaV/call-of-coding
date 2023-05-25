import React from "react";
import styles from "./LeagueDashboard.module.css";

const LeagueDashboard = () => {
	return (
		<div
			className="tab-pane fade"
			id="pills-league"
			role="tabpanel"
			aria-labelledby="pills-league-tab"
			tabIndex="0"
		>
			<div>
				<video width="320" height="240" autoplay muted loop controls>
					<source src="/video/video.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default LeagueDashboard;
