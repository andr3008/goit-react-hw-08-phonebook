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
	return (
		<div style={styles.container}>
			<span style={styles.name}>Welcome</span>
			<button type="button">SignOut</button>
		</div>
	);
}
