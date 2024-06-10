import {
	chatLink,
	cloudStorageClientLink,
	evadesIoCloneLink,
	movieLibraryLink,
	passwordGeneratorLink,
	todoListLink,
} from "./links";

interface Project {
	title: string;
	description: string;
	techs: string[];
	link: string;
	marked?: boolean;
}

// Description
const cloudStorageDescription =
	"Start managing your data with ease and efficiency today! Cloud Storage is a full-stack application that allows users to create disks, folders, and files in a cloud-based environment.";
const movieLibraryDescription =
	"Embark on a cinematic journey like never before with Movie Library – where every movie and serial is just a click away. Start exploring, discovering, and enjoying the magic of storytelling today!";
const chatDescription =
	"A simple fullstack application that allows users to create new chats and communicate with others. This is my first project. Created mainly for developing skills in working with back-end and learning how to work with web sockets.";
const todoListDescription =
	"This is a simple todo-list application built with React Native. The project was created with the primary goal of learning and exploring new technologies in the realm of mobile app development.";
const passwordGeneratorDescription =
	"This desktop application is built with ElectronJS and ReactJS, providing a simple tool to generate secure passwords effortlessly.";
const evadesIoCloneDescription =
	"A simple clone of the game 'Evades.io', recreated to mirror the original gameplay and mechanics.";
const leetCodeDescription =
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
		description: cloudStorageDescription,
		techs: cloudStorageTechs,
		link: cloudStorageClientLink,
		marked: true,
	},
	{
		title: "Movie Library",
		description: movieLibraryDescription,
		techs: movieLibraryTechs,
		link: movieLibraryLink,
	},
	{
		title: "Chat",
		description: chatDescription,
		techs: chatTechs,
		link: chatLink,
	},
	{
		title: "Password Generator",
		description: passwordGeneratorDescription,
		techs: passwordGeneratorTechs,
		link: passwordGeneratorLink,
	},
	{
		title: "Todo List",
		description: todoListDescription,
		techs: todoListTechs,
		link: todoListLink,
	},
	{
		title: "Evades.io Clone",
		description: evadesIoCloneDescription,
		techs: evadesIoCloneTechs,
		link: evadesIoCloneLink,
	},
	{
		title: "LeetCode Problem Solutions",
		description: leetCodeDescription,
		techs: leetCodeTechs,
		link: evadesIoCloneLink,
	},
];
