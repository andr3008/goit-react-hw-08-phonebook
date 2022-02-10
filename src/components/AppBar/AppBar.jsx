import CottageIcon from "@mui/icons-material/Cottage";
import { Header } from "./AppBar.styled";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

function HomeIcon(props) {
	return (
		<CottageIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</CottageIcon>
	);
}
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
				<HomeIcon fontSize="large" />
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
