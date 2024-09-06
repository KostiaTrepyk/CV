import { Stack, Paper, Typography } from "@mui/material";

interface ProjectTechListProps {
	techs: string[];
}

const ProjectTechList: React.FC<ProjectTechListProps> = ({ techs }) => {
	return (
		<Stack
			sx={{
				listStyle: "none",
				margin: 0,
				padding: 0,
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(110px,1fr))",
				gridAutoRows: "1fr",
				gap: "0.5rem",
			}}
			component="ul"
		>
			{techs.map((tech) => (
				<Paper
					key={tech}
					sx={{
						textAlign: "center",
						padding: 1.5,
						borderRadius: "1rem",
						boxShadow: 0,
					}}
					elevation={10}
					component="li"
				>
					<Typography>{tech}</Typography>
				</Paper>
			))}
		</Stack>
	);
};

export default ProjectTechList;
