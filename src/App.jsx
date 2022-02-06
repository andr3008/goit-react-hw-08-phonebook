// import { fetchContacts } from "./redux/phonebook/phonebook-operations";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "./components/Container/Container";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() =>
	import("./components/ContactView/ContactsView")
);

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	return (
		<Container>
			<AppBar />
			<Suspense fallback={<h3>Loading...</h3>}>
				<Routes>
					<Route path="/" element={<HomeView />}></Route>
					<Route path="/register" element={<RegisterView />}></Route>
					<Route path="/login" element={<LoginView />}></Route>
					{<Route path="/contacts" element={<ContactsView />}></Route>}
				</Routes>
			</Suspense>
		</Container>
	);
}
