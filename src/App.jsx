import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AppBar from "./components/AppBar/AppBar";
import { Container, Title, P } from "./App.styled";
const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView/ContactsView"));

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	const isFetchingCurrentUser = useSelector((state) => state.isFetchingCurrent);

	return (
		<Container>
			{isFetchingCurrentUser ? (
				<Title>Show React Skeleton</Title>
			) : (
				<>
					<AppBar />
					<Suspense
						fallback={
							<P>
								<CircularProgress disableShrink />
							</P>
						}
					>
						<Routes>
							<Route
								path="register"
								element={<PublicRoute component={RegisterView} restricted />}
							/>
							<Route
								path="login"
								element={<PublicRoute component={LoginView} restricted />}
							/>
							<Route
								path="contacts"
								element={<PrivateRoute component={ContactsView} />}
							/>
							<Route path="home" element={<HomeView />} />
							<Route path="*" element={<Navigate to="home" />} />
						</Routes>
						<Toaster />
					</Suspense>
				</>
			)}
		</Container>
	);
}
