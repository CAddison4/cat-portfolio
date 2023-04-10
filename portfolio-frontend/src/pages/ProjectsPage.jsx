import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../ProjectContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
	const { projects, setProjects, currentProject, setCurrentProject } =
		useContext(ProjectContext);
	const navigate = useNavigate();
	console.log("projects: ", projects);

	const handleProjectClick = (event, project) => {
		event.preventDefault();

		setCurrentProject(project);
		navigate(`/projects/${project.slug}`);
		// Navigate to project details page
	};

	return (
		<div>
			<h1>Projects</h1>
			{projects.map((project) => (
				<div key={project.slug}>
					<h2>{project.title}</h2>
					<img src={project.thumbnail} alt={project.title} />
					<p>{project.description}</p>
					<button onClick={(e) => handleProjectClick(e, project)}>
						Project Details
					</button>
				</div>
			))}
		</div>
	);
}
