import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { NavLink } from "react-router-dom";
const styles = {
	container: {
		display: "flex",
		alignItems: "center",
	},
	name: {
		fontWeight: 700,
		marginRight: 12,
	},
};

export default function UserMenu() {
	const dispatch = useDispatch();
	const name = useSelector(getUsername);
	return (
		<>
			<div style={styles.container}>
				<NavLink end to="/contacts">
					Contacts
				</NavLink>
				<span style={styles.name}>Welcome, {name}</span>
				<button type="button" onClick={() => dispatch(logOut())}>
					SignOut
				</button>
			</div>
		</>
	);
}
