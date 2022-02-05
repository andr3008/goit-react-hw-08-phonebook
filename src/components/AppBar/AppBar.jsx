import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { Outlet } from "react-router-dom";

const styles = {
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottom: "1px solid #2A363B",
	},
};

export default function AppBar() {
	return (
		<>
			<header style={styles.header}>
				<Navigation />
				<AuthNav />
				<UserMenu />
			</header>
			<Outlet />
		</>
	);
}
