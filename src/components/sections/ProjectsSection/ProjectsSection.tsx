import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "data/projects";

import ProjectList from "components/Lists/ProjectList/ProjectList";
import ProjectListItem from "components/Lists/ProjectList/ProjectListItem";

interface ProjectsSectionProps {}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>((_, ref) => {
	const topProjects = projects.slice(0, 3);

	return (
		<Container
			component={motion.section}
			sx={{
				py: { sm: 4, xs: 2 },
			}}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
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
				{topProjects.map((project) => (
					<ProjectListItem key={project.title} project={project} />
				))}
			</ProjectList>
		</Container>
	);
});

export default ProjectsSection;
