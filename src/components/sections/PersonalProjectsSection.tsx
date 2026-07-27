import { Paper, Typography, Stack, Box } from "@mui/material";
import { projects } from "data/projects";

import Tilt from "react-parallax-tilt";

const personalProjects = projects.filter((project) => project.marked);

export const PersonalProjectsSection = ({ primary = "#ffffff" }) => {
	return (
		<Paper
			sx={{
				height: "100%",
				paddingBlock: { sm: 4, xs: 3 },
				paddingInline: { sm: 4, xs: 3 },
				borderRadius: "1.5rem",
				boxShadow: "inset 0px 0px 6px #0004",
			}}
			elevation={5}
		>
			<Typography
				sx={{
					fontSize: "1.3rem",
					fontWeight: 600,
					marginBottom: "1.5rem",
				}}
				variant="h3"
			>
				Personal Projects
			</Typography>

			<Stack flexDirection="column" gap={2}>
				{personalProjects.slice(0, 2).map((project, index) => (
					<Tilt
						key={index}
						style={{
							width: "100%",
						}}
						tiltEnable={false}
						glareEnable={true}
						glareMaxOpacity={0.15}
						glareBorderRadius="1rem"
						glareColor={primary}
						glarePosition="all"
						transitionSpeed={5000}
					>
						<Paper
							sx={{
								padding: 2.5,
								borderRadius: "1rem",
								boxShadow: "inset 1px 1px 2px #fff1, 2px 5px 10px #0003",
								display: "flex",
								flexDirection: "column",
								gap: 0.5,
							}}
							elevation={10}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "baseline",
									flexWrap: "wrap",
									gap: 1,
								}}
							>
								<Typography
									sx={{
										color: "primary.light",
										fontWeight: 700,
										fontSize: "1.1rem",
									}}
								>
									{project.title}
								</Typography>
								<Typography
									sx={{
										color: "text.secondary",
										fontWeight: 500,
										fontSize: "0.85rem",
									}}
								>
									{project.techs.join(", ")}
								</Typography>
							</Box>

							<Typography
								sx={{
									color: "text.primary",
									fontSize: "0.95rem",
									marginTop: "0.5rem",
									lineHeight: 1.5,
								}}
							>
								{project.previewDescription}
							</Typography>
						</Paper>
					</Tilt>
				))}
				<Typography
					sx={{
						ml: 2.5,
						color: "text.secondary",
						fontSize: "0.9rem",
					}}
				>
					And more...
				</Typography>
			</Stack>
		</Paper>
	);
};
