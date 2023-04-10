import React from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../ProjectContext";
import { useContext } from "react";

export default function HomePage() {
	const { projects, setCurrentProject } = useContext(ProjectContext);

	const handleProjectClick = (event, project) => {
		event.preventDefault();
		console.log("project: ", project);
		setCurrentProject(project);
		// Navigate to project details page
	};

	return (
		<div className="homePageWrapper">
			<div className="homePageContent">
				<h1>Welcome to my Portfolio!</h1>
				<p>
					My name is Catherine Addison. I am a Junior Software Developer with
					experience in the following:
				</p>
				<dl>
					<dt>
						<strong>Front End:</strong>
					</dt>
					<dd>HTML, CSS, JavaScript, React, Bootstrap, Material UI</dd>
					<dt>
						<strong>Back End:</strong>
					</dt>
					<dd>
						Node.js, Express, MongoDB, Mongoose, MySQL, Sequelize, RESTful APIs
					</dd>
					<dt>
						<strong>Other:</strong>
					</dt>
					<dd>
						Git, GitHub, Heroku, Netlify, Agile, Scrum, Trello, Jira, Postman,
						Insomnia
					</dd>
				</dl>
			</div>
			<div className="projectList">
				<h2>Projects</h2>
				<ul>
					{projects.map((project) => (
						<li key={project.slug}>
							<span onClick={(e) => handleProjectClick(e, project)}>
								<Link to={`/projects/${project.slug}`}>{project.title}</Link>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
