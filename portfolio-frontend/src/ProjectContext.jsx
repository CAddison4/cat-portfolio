import React from "react";
import { createContext, useState } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
	const [projects, setProjects] = useState([
		{
			slug: "project-1",
			title: "Project 1",
			thumbnail: "https://dummyimage.com/300x200/000/fff",
			description: "This is a brief description of Project 1.",
		},
		{
			slug: "project-2",
			title: "Project 2",
			thumbnail: "https://dummyimage.com/300x200/000/fff",
			description: "This is a brief description of Project 2.",
		},
		{
			slug: "project-3",
			title: "Project 3",
			thumbnail: "https://dummyimage.com/300x200/000/fff",
			description: "This is a brief description of Project 3.",
		},
	]);

	const [currentProject, setCurrentProject] = useState({});

	return (
		<ProjectContext.Provider
			value={{ projects, setProjects, currentProject, setCurrentProject }}>
			{children}
		</ProjectContext.Provider>
	);
}
