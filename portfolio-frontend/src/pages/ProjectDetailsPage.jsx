import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectContext } from "../ProjectContext";
import { useContext } from "react";

export default function ProjectDetailsPage() {
	const { projects, setProjects, currentProject, setCurrentProject } =
		useContext(ProjectContext);

	console.log("currentProject: ", currentProject);
	const { slug } = useParams();

	return (
		<div>
			<h1>{currentProject.title}</h1>
			<img src={currentProject.image} alt={currentProject.title} />
			<p>{currentProject.description}</p>
			<a href={currentProject.website} target="_blank" rel="noreferrer">
				Visit Website
			</a>
			<Link to="/projects">Back to Projects</Link>
		</div>
	);
}
