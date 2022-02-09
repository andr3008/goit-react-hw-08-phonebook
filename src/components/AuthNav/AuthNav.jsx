import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
	link: {
		display: "inline-block",
		textDecoration: "none",
		padding: 12,
		fontWeight: 700,
		color: "#2A363B",
	},
	activeLink: {
		color: "#E84A5F",
	},
};

export default function AuthNav() {
	return (
		<>
			<div>
				<NavLink end to="/register" style={styles.link}>
					Registration
				</NavLink>
				<NavLink end to="/login" style={styles.link}>
					Sign In
				</NavLink>
			</div>
		</>
	);
}
