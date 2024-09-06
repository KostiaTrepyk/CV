import {
	Dialog,
	Typography,
	IconButton,
	DialogProps,
	Box,
	Divider,
	Stack,
	Paper,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Project } from "data/projects";

interface ProjectDescriptionDialogProps extends DialogProps {
	project: Project;
}

const ProjectDescriptionDialog: React.FC<ProjectDescriptionDialogProps> = ({
	project,
	...rest
}) => {
	return (
		<Dialog
			{...rest}
			sx={{
				backdropFilter: "blur(2px)",
				transition: "all 0.5s",
				...rest.sx,
			}}
			PaperProps={{
				...rest.PaperProps,
				sx: {
					py: 4,
					borderRadius: 6,
					boxShadow: "inset 0 0 2px 0px #fff3",
					...rest.PaperProps?.sx,
				},
			}}
		>
			<Typography sx={{ textAlign: "center", mb: 3 }} variant="h4">
				{project.title}
			</Typography>

			<Divider />

			<Box
				sx={{ display: "flex", flexDirection: "column", gap: 2, px: 4, mt: 3 }}
			>
				{project.description.map((description) => (
					<Box key={description.text}>
						<Typography
							sx={{
								fontSize: 26,
								letterSpacing: 0.5,
								wordSpacing: 2,
							}}
							variant="h4"
						>
							{description.title}
						</Typography>

						<Typography
							sx={{
								fontSize: 16,
								letterSpacing: 1,
								wordSpacing: 1,
							}}
							variant="body1"
						>
							{description.text}
						</Typography>
					</Box>
				))}

				<Stack direction="row" gap={2} flexWrap="wrap">
					{project.techs.map((tech, i) => (
						<Paper
							key={tech}
							sx={{
								bgcolor: i % 2 === 0 ? "#6661" : "primary.dark",
								textAlign: "center",
								borderRadius: 3,
								boxShadow: "inset 0 0 2px 0.5px #fff5",
								py: 2,
								px: 3,
								flexGrow: 1,
							}}
							elevation={0}
						>
							{tech}
						</Paper>
					))}
				</Stack>
			</Box>

			<IconButton
				sx={{ position: "absolute", right: 8, top: 8 }}
				onClick={() => {
					if (rest.onClose) rest.onClose({}, "backdropClick");
				}}
				color="error"
				size="large"
			>
				<Close />
			</IconButton>
		</Dialog>
	);
};

export default ProjectDescriptionDialog;
