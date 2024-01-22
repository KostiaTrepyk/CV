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
          "Embark on a cinematic journey like never before with Movie Library – where every movie and serial is just a click away. Start exploring, discovering, and enjoying the magic of storytelling today!",
        technologies: ["React", "Redux", "Typescript", "Material UI"],
        link: movieLibraryLink,
      },
      {
        title: "Cloud Storage",
        description:
          "Start managing your data with ease and efficiency today! Cloud Storage is a full-stack application that allows users to create disks, folders, and files in a cloud-based environment.",
        technologies: [
          "React",
          "Redux",
          "Storybook",
          "Typescript",
          "NestJs",
          "JWT",
        ],
        link: cloudStorageClientLink,
      },
      {
        title: "Chat",
        description:
          "A simple fullstack application that allows users to create new chats and communicate with others. This is my first project. Created mainly for developing skills in working with back-end and learning how to work with web sockets.",
        technologies: ["React", "Typescript", "WebSocket", "JWT"],
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
            <Link to={"https://github.com/KostiaTrepyk"}>Github</Link>
          </Typography>{" "}
          to see more
        </Typography>

        <ProjectList>
          {projects.map((project) => (
            <ProjectListItem key={project.title} project={project} />
          ))}
        </ProjectList>
      </Container>
    );
  }
);

export default ProjectsSection;
