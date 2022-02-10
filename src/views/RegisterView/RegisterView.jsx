import { register } from "../../redux/auth/auth-operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, LoginTitle } from "./RegisterView.styled";

export default function RegisterView() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case "name":
				return setName(value);
			case "email":
				return setEmail(value);
			case "password":
				return setPassword(value);
			default:
				return;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(register({ name, email, password }));
		setName("");
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<LoginTitle>SignUp</LoginTitle>

			<Form onSubmit={handleSubmit} autoComplete="off">
				<Box
					sx={{
						width: 300,
						maxWidth: "100%",
						marginRight: "auto",
						marginLeft: "auto",
					}}
				>
					<TextField
						sx={{
							marginBottom: 3,
							bgcolor: "white",
							borderRadius: 1,
						}}
						fullWidth
						label="Name"
						id="name"
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
						size="small"
					/>
				</Box>
				<Box
					sx={{
						width: 300,
						maxWidth: "100%",
						marginRight: "auto",
						marginLeft: "auto",
						padingBottom: 20,
					}}
				>
					<TextField
						sx={{
							marginBottom: 3,
							bgcolor: "white",
							borderRadius: 1,
						}}
						fullWidth
						label="Email"
						id="email"
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						size="small"
					/>
				</Box>
				<Box
					sx={{
						width: 300,
						maxWidth: "100%",
						marginRight: "auto",
						marginLeft: "auto",
					}}
				>
					<TextField
						sx={{
							marginBottom: 3,
							bgcolor: "white",
							borderRadius: 1,
						}}
						fullWidth
						label="Password"
						id="password"
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
						size="small"
					/>
				</Box>

				<Button type="submit" variant="contained" size="small">
					Registration
				</Button>
			</Form>
		</div>
	);
}
