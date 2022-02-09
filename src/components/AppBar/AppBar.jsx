import React from "react";
import { NavLink } from "react-router-dom";

import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { Header } from "./AppBar.styled";

export default function AppBar() {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<Header>
			<NavLink
				end
				to="home"
				style={({ isActive }) => ({
					color: isActive ? "#dc0088" : "white",
					textDecoration: "none",
					paddingLeft: 20,
					padding: 6,
				})}
			>
				Phonebook
			</NavLink>
			{!isLoggedIn ? (
				<>
					<AuthNav />
				</>
			) : (
				<UserMenu />
			)}
		</Header>
	);
}
