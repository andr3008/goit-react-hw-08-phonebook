import { NavLink } from "react-router-dom";
import { Div } from "./AuthNav.styled";

export default function AuthNav() {
	return (
		<>
			<Div>
				<NavLink
					end
					to="register"
					style={({ isActive }) => ({
						color: isActive ? "#dc0088" : "white",
						textDecoration: "none",
						paddingRight: 30,
					})}
				>
					SignUp
				</NavLink>
				<NavLink
					end
					to="login"
					style={({ isActive }) => ({
						color: isActive ? "#dc0088" : "white",
						textDecoration: "none",
						paddingRight: 30,
					})}
				>
					SignIn
				</NavLink>
			</Div>
		</>
	);
}
