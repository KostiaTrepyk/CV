import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import SkillsList from "components/Lists/SkillsList/SkillsList";

import bg from "assets/bg.svg";
import notMyImage from "assets/notMyImage.png";
import { skills } from "data/skills";
import { PersonalProjectsSection } from "./PersonalProjectsSection";

interface AboutSectionProps {}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>((_, ref) => {
	return (
		<Container
			component={motion.section}
			sx={{ py: { sm: 4, xs: 2 } }}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			ref={ref}
		>
			<Grid sx={{ mt: 2 }} container spacing={2}>
				<Grid item xs={12}>
					<Paper
						sx={{
							backgroundImage: `url(${bg}), linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))`,
							backgroundSize: "cover",
							minHeight: { sm: "9rem", xs: "8rem" },
							borderRadius: { sm: "4.5rem", xs: "1.5rem" },
							display: "flex",
							alignItems: "center",
							flexDirection: { sm: "row", xs: "column" },
							textAlign: { sm: "left", xs: "center" },
							gap: 2,
							padding: 3,
							mb: 2,
							boxShadow: "inset 0px 0px 8px #0004",
						}}
						elevation={10}
					>
						<Box
							component="img"
							sx={{
								height: { sm: "7rem", xs: "7rem" },
								bgcolor: "#151515",
								aspectRatio: "1/1",
								borderRadius: "50%",
							}}
							src={notMyImage}
							alt=""
						></Box>

						<Box>
							<Typography
								sx={{
									fontSize: "1.5rem",
									fontWeight: 600,
									letterSpacing: "0.15rem",
								}}
								variant="h2"
							>
								Kostia
							</Typography>

							<Typography
								sx={{
									fontSize: "0.9rem",
									fontWeight: 600,
									letterSpacing: "0.05rem",
									marginBottom: "0.3rem",
									color: "primary.light",
								}}
							>
								Fullstack developer
							</Typography>

							<Typography
								sx={{
									fontSize: "0.9rem",
									fontWeight: 300,
									letterSpacing: "0.05rem",
									color: "text.disabled",
								}}
							>
								Always learning, building the web of tomorrow.
							</Typography>
						</Box>
					</Paper>
				</Grid>

				<Grid item md={4} sm={6} xs={12}>
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
								fontSize: "1.4rem",
								fontWeight: 400,
								marginBottom: "1rem",
							}}
							variant="h3"
						>
							Skills
						</Typography>

						<SkillsList skills={skills} />
					</Paper>
				</Grid>

				<Grid item md={4} sm={6} xs={12}>
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
								marginBottom: "1rem",
							}}
							variant="h3"
						>
							About me
						</Typography>
						<Typography
							sx={{
								fontSize: "0.95rem",
								letterSpacing: "0.05rem",
							}}
						>
							Hello,
						</Typography>
						<Typography
							sx={{
								mt: 1,
								fontSize: "0.95rem",
								lineHeight: "1.5rem",
								letterSpacing: "0.05rem",
								textAlign: "justify",
							}}
						>
							I am Kostia, an ambitious Fullstack Developer with a
							passion for building efficient and scalable web
							applications. My expertise spans the full modern
							JavaScript ecosystem, focusing on React for the
							frontend and NestJS for the backend. Driven by
							continuous learning, I have successfully engineered
							multiple pet projects, honing my skills in creating
							robust architectures and seamless user experiences.
						</Typography>
					</Paper>
				</Grid>

				<Grid item md={4} xs={12}>
					<PersonalProjectsSection />
				</Grid>
			</Grid>
		</Container>
	);
});

export default AboutSection;
