import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ProjectProvider } from "./ProjectContext";
import "./scss/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavBar />
			<ProjectProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/projects/:slug" element={<ProjectDetailsPage />} />
				</Routes>
			</ProjectProvider>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
