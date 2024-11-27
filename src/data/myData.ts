import { Skill } from "components/Lists/SkillsList/SkillsList";

import Html5Icon from "assets/icons/html5.svg";
import CSS3Icon from "assets/icons/css3.svg";
import ReactIcon from "assets/icons/react.svg";
import ReduxIcon from "assets/icons/redux.svg";
import MUIIcon from "assets/icons/mui.svg";
import GitHubIcon from "assets/icons/github.svg";
import NestJsIcon from "assets/icons/nestjs.svg";
import TypescriptIcon from "assets/icons/typescript.svg";
import CoffeeIcon from "assets/icons/coffee.svg";

export const skills: Skill[] = [
	{ iconSrc: Html5Icon, label: "HTML5" },
	{ iconSrc: CSS3Icon, label: "CSS3" },
	{ label: "RWD" },
	{ iconSrc: ReactIcon, label: "React" },
	{ iconSrc: ReduxIcon, label: "Redux" },
	{ iconSrc: MUIIcon, label: "Material UI" },
	{ iconSrc: CoffeeIcon, label: "Problem solving" },
	{ iconSrc: GitHubIcon, label: "Git" },
	{ iconSrc: NestJsIcon, label: "NestJs" },
	{ iconSrc: TypescriptIcon, label: "Typescript" },
	{ label: "MySQL" },
	{ label: "Docker" },
];

export const codingSince = [
	{ date: new Date(2020, 7), label: "HTML" },
	{ date: new Date(2020, 7), label: "CSS" },
	{ date: new Date(2021, 5), label: "JavaScript" },
	{ date: new Date(2023, 1), label: "TypeScript" },
	{ date: new Date(2022, 9), label: "React" },
	{ date: new Date(2022, 11), label: "NestJs" },
];
