import {
	chatLink,
	cloudStorageClientLink,
	evadesIoCloneLink,
	movieLibraryLink,
	passwordGeneratorLink,
	todoListLink,
} from "./links";

export interface Project {
	title: string;
	description: ProjectDescription[];
	previewDescription: string;
	techs: string[];
	link: string;
	marked?: boolean;
}

interface ProjectDescription {
	title?: string;
	text: string;
}

// FullDescription
const cloudStorageFullDescription: ProjectDescription[] = [
	{
		title: "💡 Title",
		text: "Start managing your data with ease and efficiency today! Cloud Storage is a full-stack application that allows users to create disks, folders, and files in a cloud-based environment.",
	},
	{
		title: "Title",
		text: "Start managing your data with ease and efficiency today! Cloud Storage is a full-stack application that allows users to create disks, folders, and files in a cloud-based environment.",
	},
];
const movieLibraryFullDescription: ProjectDescription[] = [
	{
		title: "Title",
		text: "Embark on a cinematic journey like never before with Movie Library – where every movie and serial is just a click away. Start exploring, discovering, and enjoying the magic of storytelling today!",
	},
];
const chatFullDescription: ProjectDescription[] = [
	{
		title: "Title",
		text: "A simple fullstack application that allows users to create new chats and communicate with others. This is my first project. Created mainly for developing skills in working with back-end and learning how to work with web sockets.",
	},
];
const passwordGeneratorFullDescription: ProjectDescription[] = [];
const todoListFullDescription: ProjectDescription[] = [];
const evadesIoCloneFullDescription: ProjectDescription[] = [];
const leetCodeFullDescription: ProjectDescription[] = [];

// MiniDescription
const cloudStoragePreviewDescription =
	"Start managing your data with ease and efficiency today! Cloud Storage is a full-stack application that allows users to create disks, folders, and files in a cloud-based environment.";
const movieLibraryPreviewDescription =
	"Embark on a cinematic journey like never before with Movie Library – where every movie and serial is just a click away. Start exploring, discovering, and enjoying the magic of storytelling today!";
const chatPreviewDescription =
	"A simple fullstack application that allows users to create new chats and communicate with others. This is my first project. Created mainly for developing skills in working with back-end and learning how to work with web sockets.";
const passwordGeneratorPreviewDescription =
	"This desktop application is built with ElectronJS and ReactJS, providing a simple tool to generate secure passwords effortlessly.";
const todoListPreviewDescription =
	"This is a simple todo-list application built with React Native. The project was created with the primary goal of learning and exploring new technologies in the realm of mobile app development.";
const evadesIoClonePreviewDescription =
	"A simple clone of the game 'Evades.io', recreated to mirror the original gameplay and mechanics.";
const leetCodePreviewDescription =
	"A TypeScript project containing my solutions to LeetCode problems, complete with unit tests to ensure accuracy and reliability.";

// Techs
const cloudStorageTechs: string[] = [
	"React",
	"RTK Query",
	"Storybook",
	"Typescript",
	"NestJs",
	"JWT",
];
const movieLibraryTechs: string[] = [
	"React",
	"Redux",
	"Typescript",
	"Material UI",
];
const chatTechs: string[] = ["React", "Typescript", "WebSocket", "JWT"];
const todoListTechs: string[] = ["React-Native", "Async Storage", "Typescript"];
const passwordGeneratorTechs: string[] = ["ElectronJs", "React", "Material UI"];
const evadesIoCloneTechs: string[] = ["Webpack", "Typescript"];
const leetCodeTechs: string[] = ["Typescript", "Unit Tests", "GitHub Actions"];

export const projects: Project[] = [
	{
		title: "Cloud Storage",
		description: cloudStorageFullDescription,
		previewDescription: cloudStoragePreviewDescription,
		techs: cloudStorageTechs,
		link: cloudStorageClientLink,
		marked: true,
	},
	{
		title: "Movie Library",
		description: movieLibraryFullDescription,
		previewDescription: movieLibraryPreviewDescription,
		techs: movieLibraryTechs,
		link: movieLibraryLink,
	},
	{
		title: "Chat",
		description: chatFullDescription,
		previewDescription: chatPreviewDescription,
		techs: chatTechs,
		link: chatLink,
	},
	{
		title: "Password Generator",
		description: passwordGeneratorFullDescription,
		previewDescription: passwordGeneratorPreviewDescription,
		techs: passwordGeneratorTechs,
		link: passwordGeneratorLink,
	},
	{
		title: "Todo List",
		description: todoListFullDescription,
		previewDescription: todoListPreviewDescription,
		techs: todoListTechs,
		link: todoListLink,
	},
	{
		title: "Evades.io Clone",
		description: evadesIoCloneFullDescription,
		previewDescription: evadesIoClonePreviewDescription,
		techs: evadesIoCloneTechs,
		link: evadesIoCloneLink,
	},
	{
		title: "LeetCode Problem Solutions",
		description: leetCodeFullDescription,
		previewDescription: leetCodePreviewDescription,
		techs: leetCodeTechs,
		link: evadesIoCloneLink,
	},
];
