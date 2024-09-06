import { forwardRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { type Variants, motion } from "framer-motion";
import { type Project } from "data/projects";

import ProjectDescriptionDialog from "./ProjectDescriptionDialog";
import ProjectTechList from "./ProjectTechList";

const MBox = motion(Box);

const animations: Variants = {
	initial: {
		y: 20,
		scale: 0.95,
	},
	inView: {
		y: 0,
		scale: 1,
	},
	hover: {
		y: -5,
		scale: 0.98,
	},
};

interface ProjectListItemProps {
	project: Project;
}

const ProjectListItem = forwardRef<HTMLLIElement, ProjectListItemProps>(
	({ project }, ref) => {
		const [isDialogOpened, setDialogOpened] = useState<boolean>(false);

		const openDialog = () => {
			setDialogOpened(true);
		};

		const closeDialog = () => {
			setDialogOpened(false);
		};

		return (
			<MBox
				initial="initial"
				whileInView="inView"
				whileHover="hover"
				variants={animations}
				transition={{
					ease: "easeOut",
					duration: 0.25,
				}}
				sx={{
					flex: "1 1 320px",
					display: "flex",
					flexDirection: "column",
					gap: 3,
					paddingInline: 3,
					paddingBlock: 5,
					borderRadius: "2rem",
					maxWidth: "500px",

					backgroundImage: (theme) =>
						`linear-gradient(-235deg, ${theme.palette.primary.dark} -120%, #ffffff18 20% 70%, ${theme.palette.primary.dark} 250%)`,
					boxShadow: "inset 0px 0px 4px #0004",
				}}
				component="li"
				ref={ref}
			>
				<Box>
					<Typography
						sx={{
							textAlign: "center",
							fontSize: "1.8rem",
							fontWeight: 600,
							marginBottom: 1,
						}}
						variant="h3"
					>
						{project.title}
					</Typography>

					<Typography
						sx={{
							letterSpacing: "0.03rem",
							color: "text.secondary",
						}}
					>
						{project.previewDescription}
					</Typography>
				</Box>

				<ProjectTechList techs={project.techs} />

				<Button
					sx={{
						width: "fit-content",
						mx: "auto",
						mt: "auto",
						borderRadius: "2rem",
					}}
					variant="contained"
					size="large"
					onClick={openDialog}
				>
					Check out
				</Button>

				<ProjectDescriptionDialog
					project={project}
					open={isDialogOpened}
					onClose={closeDialog}
				/>
			</MBox>
		);
	}
);

export default ProjectListItem;
