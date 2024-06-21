import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./pages/Gallery.jsx";
import Header from "./components/Header.jsx";

function App() {
	return (
		<>
			<Router>
				<Header />

				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
