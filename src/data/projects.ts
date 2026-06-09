import { links } from "./links";

export interface ProjectDescription {
	subtitle?: string;
	text?: string;
}

export interface Project {
	title: string;
	previewDescription: string;
	description: ProjectDescription[];
	techs: string[];
	githubLink: string;
	marked?: boolean;
}

export const projects: Project[] = [
	{
		title: "Cloud Storage",
		previewDescription:
			"A full-stack cloud storage solution enabling users to securely manage virtual disks, hierarchical folders, and files. Built with a focus on responsive design and secure data handling.",
		description: [
			{
				subtitle: "About the project",
				text: "Cloud Storage is a comprehensive full-stack application designed for secure and efficient file management in a cloud-based environment. It provides users with an intuitive platform to organize their personal data through a custom-built file system architecture.",
			},
			{
				subtitle: "Features",
				text: "JWT Authentication, Disk & Folder Architecture, Seamless File Operations (upload, download, delete), Responsive UI",
			},
			{ subtitle: "Techs" },
		],
		techs: [
			"React",
			"RTK Query",
			"NestJs",
			"JWT",
			"TypeOrm",
			"Docker",
			"Typescript",
			"Storybook",
			"Tailwind CSS",
		],
		githubLink: links.projects.cloudStorageClient,
		marked: true,
	},
	{
		title: "Chess Evaluation Engine",
		previewDescription:
			"Custom-trained neural network architectures (NNUE/ResNet) for chess position evaluation, integrated with a modern web frontend.",
		description: [
			{
				subtitle: "About the project",
				text: "A sophisticated chess engine utilizing deep learning models trained on custom datasets to evaluate complex board positions with high accuracy. The backend logic is seamlessly connected to an interactive frontend interface.",
			},
			{ subtitle: "Techs" },
		],
		techs: ["Python", "Next.js", "Neural Networks", "Typescript"],
		githubLink: links.projects.chessEngine,
		marked: true,
	},
	{
		title: "Evades.io Clone",
		previewDescription:
			"An independent, zero-dependency browser game clone built entirely from scratch with a focus on performance and rendering optimization.",
		description: [
			{
				subtitle: "About the project",
				text: "A fully functional clone of the game 'Evades.io'. Developed without external rendering libraries to ensure maximum performance, utilizing raw HTML Canvas and strict TypeScript architectural patterns.",
			},
			{ subtitle: "Techs" },
		],
		techs: ["HTML Canvas", "Vanilla JS/TS", "Webpack"],
		githubLink: links.projects.evadesIoClone,
		marked: true,
	},
	{
		title: "Movie Library",
		previewDescription:
			"A dynamic web application for discovering and managing movie collections. Features state management for saving favorite titles and real-time data fetching from external APIs.",
		description: [
			{
				subtitle: "About the project",
				text: "A single-page application that interacts with a third-party movie API to display comprehensive information about films and series. It includes advanced search functionalities and persistent state management for user preferences.",
			},
			{ subtitle: "Techs" },
		],
		techs: ["React", "Redux", "Typescript", "Material UI"],
		githubLink: links.projects.movieLibrary,
	},
	{
		title: "Real-time Chat",
		previewDescription:
			"A real-time messaging platform enabling instant communication between users. Implements secure authentication, persistent chat history, and bidirectional socket connections.",
		description: [
			{
				subtitle: "About the project",
				text: "A full-stack messaging application designed to handle real-time data transfer. It utilizes WebSockets for instant message delivery and provides isolated chat rooms with secure access control.",
			},
			{ subtitle: "Techs" },
		],
		techs: ["React", "Typescript", "WebSocket", "JWT", "NestJs"],
		githubLink: links.projects.chatApp,
	},
	{
		title: "Password Generator",
		previewDescription:
			"A cross-platform desktop utility built with Electron for generating complex, secure passwords with an intuitive React-based interface.",
		description: [{ subtitle: "Techs" }],
		techs: ["ElectronJs", "React", "Material UI"],
		githubLink: links.projects.passwordGenerator,
	},
	{
		title: "Mobile Todo List",
		previewDescription:
			"A mobile task management application featuring local data persistence. Designed to provide a smooth user experience with offline capabilities.",
		description: [{ subtitle: "Techs" }],
		techs: ["React-Native", "Async Storage", "Typescript"],
		githubLink: links.projects.todoList,
	},
];
