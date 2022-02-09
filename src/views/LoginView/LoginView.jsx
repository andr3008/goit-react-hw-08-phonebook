import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, LoginTitle } from "./LoginView.styled";

export default function LoginView() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
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
		dispatch(logIn({ email, password }));
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<LoginTitle>Login page</LoginTitle>

			<Form onSubmit={handleSubmit} autoComplete="off">
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
					Sign In
				</Button>
			</Form>
		</div>
	);
}
