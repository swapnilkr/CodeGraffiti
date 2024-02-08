import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import NavBar from "./components/Navbar";
import HomeTSA from "./components/Home/HomeTSA";
import Whoiam from "./components/About/Whoiam.js";
import Experience from "./components/About/Experience.js";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

	const [startup, setStartup] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setStartup(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, []);


	return (

		<Router>
			<Preloader startup={startup} />
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeTSA />} />
				<Route path="/whoiam" element={<Whoiam />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/project" element={<Projects />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<ScrollToTop />
			<Footer />
		</Router>

	);
}

export default App;
