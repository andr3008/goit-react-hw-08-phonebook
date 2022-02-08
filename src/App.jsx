// import { fetchContacts } from "./redux/phonebook/phonebook-operations";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import HomeView from "./views/Homeview/HomeView";

import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AppBar from "./components/AppBar/AppBar";
import RegisterView from "./views/RegisterView";
import Login from "./views/Login";
import Contacts from "./components/Contacts/Contacts";

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	const isFetchingCurrentUser = useSelector((state) => state.isFetchingCurrent);

	return !isFetchingCurrentUser ? (
		<div className="App">
			<AppBar />
			<Routes>
				<Route
					path="register"
					element={<PublicRoute component={RegisterView} restricted />}
				/>
				<Route
					path="login"
					element={<PublicRoute component={Login} restricted />}
				/>
				<Route
					path="contacts"
					element={<PrivateRoute component={Contacts} />}
				/>
				<Route path="/home" element={<HomeView />} />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
			<ToastContainer />
		</div>
	) : (
		<div>Loading...</div>
	);
}
