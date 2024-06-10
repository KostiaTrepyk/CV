import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { primary } from "core/Theme/theme";

import SkillsList, { Skill } from "components/Lists/SkillsList/SkillsList";

import Html5Icon from "assets/icons/html5.svg";
import CSS3Icon from "assets/icons/css3.svg";
import ReactIcon from "assets/icons/react.svg";
import ReduxIcon from "assets/icons/redux.svg";
import MUIIcon from "assets/icons/mui.svg";
import GitHubIcon from "assets/icons/github.svg";
import NestJsIcon from "assets/icons/nestjs.svg";
import TypescriptIcon from "assets/icons/typescript.svg";
import CoffeeIcon from "assets/icons/coffee.svg";

import bg from "assets/bg.svg";
import notMyImage from "assets/notMyImage.png";

const MContainer = motion(Container);

interface AboutSectionProps {}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>((_, ref) => {
	const skills: Skill[] = [
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
	];

	const codingSince = [
		{ date: new Date(2020, 7), label: "HTML" },
		{ date: new Date(2020, 7), label: "CSS" },
		{ date: new Date(2021, 5), label: "JavaScript" },
		{ date: new Date(2023, 1), label: "TypeScript" },
		{ date: new Date(2022, 9), label: "React" },
		{ date: new Date(2022, 11), label: "NestJs" },
	];

	return (
		<MContainer
			sx={{ py: { sm: 4, xs: 2 } }}
			// @ts-ignore
			component="section"
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
								Frontend developer
							</Typography>

							<Typography
								sx={{
									fontSize: "0.9rem",
									fontWeight: 300,
									letterSpacing: "0.05rem",
									color: "text.disabled",
								}}
							>
								Learning is a treasure that follows its owner everywhere.
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
								pb: 1.5,
								fontSize: "0.95rem",
								letterSpacing: "0.05rem",
							}}
						>
							Hello, my name is Kostia.
						</Typography>
						<Typography
							sx={{
								py: 1.5,
								fontSize: "0.95rem",
								lineHeight: "1.5rem",
								letterSpacing: "0.05rem",
							}}
						>
							I am a self-taught full-stack developer specializing in React,
							Redux, NestJs, and TypeScript. My journey includes developing pet
							projects that highlight my dedication to creating seamless user
							experiences. With expertise in both front-end and back-end
							technologies, I bring a unique blend of creativity and technical
							proficiency to every project.
						</Typography>
					</Paper>
				</Grid>

				<Grid item md={4} xs={12}>
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
							Coding experience
						</Typography>

						<Stack flexDirection="row" flexWrap="wrap" gap={2}>
							{codingSince.map((item, index) => {
								const now = new Date();

								const year = now.getFullYear() - item.date.getFullYear();

								const month = now.getMonth() - item.date.getMonth();

								let text: string = "";

								if (year > 0) {
									if (year !== 1) text = `${year} years`;
									else text = `${year} year`;
								}

								if (text.length > 0 && month > 0) text += ", ";

								if (month > 0) {
									if (month !== 1) text += `${month} months`;
									else text += `${month} month`;
								}

								return (
									<Tilt
										key={index}
										style={{
											height: "100%",
											flex: "1 1 auto",
										}}
										tiltEnable={false}
										glareEnable={true}
										glareMaxOpacity={0.3}
										glareBorderRadius="1rem"
										glareColor={primary}
										glarePosition="all"
										transitionSpeed={5000}
									>
										<Paper
											sx={{
												flex: "1 1 80px",
												padding: 2,
												borderRadius: "1rem",
												boxShadow:
													"inset 1px 1px 2px #fff1, 2px 5px 10px #0003",
											}}
											elevation={10}
										>
											<Typography
												sx={{
													color: "primary.light",
													fontWeight: 700,
													textAlign: "center",
													marginBottom: "0.2rem",
												}}
											>
												{item.label}
											</Typography>

											<Typography
												sx={{
													textAlign: "center",
													color: "text.secondary",
												}}
											>
												{text}
											</Typography>
										</Paper>
									</Tilt>
								);
							})}
						</Stack>
					</Paper>
				</Grid>
			</Grid>
		</MContainer>
	);
});

export default AboutSection;
