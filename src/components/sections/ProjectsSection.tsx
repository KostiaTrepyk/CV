import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { chatLink, cloudStorageClientLink, movieLibraryLink } from "data/links";

import ProjectList from "components/Lists/ProjectList/ProjectList";
import ProjectListItem, {
    type Project,
} from "components/Lists/ProjectList/ProjectListItem";

interface ProjectsSectionProps {}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
    (_, ref) => {
        const projects: Project[] = [
            {
                title: "Movie Library",
                description:
                    "Initially, I wanted to make something like a mini kinopoisk.ru. But it turned out that all good APIs are paid, and in the end I made a crutch with 2 APIs and decided that there was no point in continuing to improve the project.",
                technologies: [
                    "React",
                    "Typescript",
                    "Material UI",
                    "react-router-dom",
                ],
                link: movieLibraryLink,
            },
            {
                title: "Cloud Storage",
                description:
                    "This is a full-stack application that allows you to save your files and share them with others. My last project after Spectrum CV.",
                technologies: [
                    "React",
                    "Typescript",
                    "Tailwind CSS",
                    "react-router-dom",
                    "NestJs",
                    "JWT",
                ],
                link: cloudStorageClientLink,
            },
            {
                title: "Chat",
                description:
                    "My first project. Created mainly to develop backend skills and to learn how to work with web sockets.",
                technologies: [
                    "React",
                    "Typescript",
                    "WebSocket",
                    "react-router-dom",
                    "JWT",
                ],
                link: chatLink,
            },
        ];

        return (
            <Container
                sx={{
                    py: { sm: 4, xs: 2 },
                }}
                component="section"
                ref={ref}
            >
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "1.8rem",
                    }}
                    variant="h2"
                >
                    Selected projects
                </Typography>

                <Typography
                    sx={{
                        color: "text.disabled",
                        textAlign: "center",
                        marginBottom: "1.5rem",
                        fontSize: "1.2rem",
                    }}
                >
                    Visit my{" "}
                    <Typography
                        sx={{
                            fontSize: "inherit",
                            color: "primary.main",
                            textDecoration: "underline",
                        }}
                        component="span"
                    >
                        <Link to={"https://github.com/KostiaTrepyk"}>
                            Github
                        </Link>
                    </Typography>{" "}
                    to see more
                </Typography>

                <ProjectList>
                    {projects.map((project) => (
                        <ProjectListItem
                            key={project.title}
                            project={project}
                        />
                    ))}
                </ProjectList>
            </Container>
        );
    }
);

export default ProjectsSection;
