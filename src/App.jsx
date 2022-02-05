import { fetchContacts } from "./redux/phonebook/phonebook-operations";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "./components/Container/Container";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
export default function App() {
	const dispatch = useDispatch();
	useEffect(() => dispatch(fetchContacts()), [dispatch]);

	return (
		<Container>
			<AppBar />
			<Suspense fallback={<h3>Loading...</h3>}>
				<Routes>
					<Route path="/"></Route>
					<Route path="/movies/:filmId">
						<Route path="cast"></Route>
						<Route path="reviews"></Route>
					</Route>
					<Route path="/movies"></Route>
					<Route path="*"></Route>
				</Routes>
			</Suspense>
		</Container>
	);
}
