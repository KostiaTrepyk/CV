import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { primary } from "core/Theme/theme";

import AnimatedText from "components/AnimatedText";
import Carousel from "components/Carousel/Carousel";

import mlib1 from "assets/carousel/mlib1.png";
import mlib2 from "assets/carousel/mlib2.png";
import mlib3 from "assets/carousel/mlib3.png";
import cloudStorage from "assets/carousel/cloud-storage.png";
import chat from "assets/carousel/chat.png";
import passwordGenerator from "assets/carousel/password-generator.png";
import todoList from "assets/carousel/todo-list.jpg";

const MCarousel = motion(Carousel);
const MTypography = motion(Typography);
const MLink = motion(Link);

interface IntroSectionProps {}

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>((_, ref) => {
	const text1 = "Fullstack";
	const text2 = "developer";
	const text3 = "Hello World!";

	const carouselImages: { src: string; alt: string }[] = [
		{ src: mlib1, alt: "Movie Library 1" },
		{ src: mlib2, alt: "Movie Library 2" },
		{ src: mlib3, alt: "Movie Library 3" },
		{ src: cloudStorage, alt: "Cloud Storage" },
		{ src: passwordGenerator, alt: "Password generator" },
		{ src: todoList, alt: "Todo list" },
		{ src: chat, alt: "Chat" },
	];

	return (
		<Container
			sx={{
				paddingTop: "6rem",
				paddingBottom: { sm: 16, xs: 8 },
				position: "relative",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
			component="section"
			ref={ref}
		>
			<Grid spacing={5} container>
				<Grid
					sx={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						width: { sm: "85%", xs: "100%" },
						marginInline: "auto",
						mb: { md: 0, xs: 2 },
					}}
					item
					md={6}
				>
					<MTypography
						sx={{
							fontWeight: 700,
							letterSpacing: "0.1rem",
							fontSize: {
								md: "clamp(2.5rem, 4vw, 3.5rem)",
								sm: "2.8rem",
								xs: "3.3rem",
							},
							textAlign: "center",
							mb: "0.5rem",
						}}
						variant="h2"
					>
						<AnimatedText text={text1} speed={0.055} />{" "}
						<Box sx={{ display: { sm: "none", xs: "inline" } }}>
							<br />
						</Box>
						<Typography
							sx={{ color: "primary.main" }}
							component="span"
							variant="inherit"
						>
							<AnimatedText
								text={text2}
								speed={0.055}
								delay={text1.length * 0.055}
							/>
						</Typography>
					</MTypography>

					<MTypography
						sx={{
							fontSize: "clamp(1rem, 0.5rem + 2vw, 1.2rem)",
							letterSpacing: "0.4rem",
							textAlign: "center",
							fontWeight: "700",
							mb: "3rem",
						}}
						variant="body1"
					>
						<AnimatedText
							text={text3}
							speed={0.055}
							delay={(text1.length + text2.length) * 0.055 + 0.5}
						/>
					</MTypography>

					<MTypography
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: [0, 0.2, 0.5, 1], x: 0 }}
						transition={{
							duration: 0.5,
							delay:
								(text1.length + text2.length + text3.length) * 0.055 + 1.25,
						}}
						sx={{
							paddingInline: { sm: 0, xs: "10%" },
							fontSize: "clamp(1rem, 0.5rem + 2vw, 1.2rem)",
							lineHeight: "2rem",
							mb: "3rem",
						}}
						variant="body1"
					>
						Welcome to my world of front-end development, where creativity meets
						functionality to craft exceptional digital experiences.
					</MTypography>

					<Box
						sx={{
							width: { sm: "fit-content", xs: "100%" },
							display: { sm: "block", xs: "grid" },
							placeContent: { xs: "center" },
						}}
					>
						<MLink
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: [0, 0.2, 0.5, 1], x: 0 }}
							transition={{
								duration: 0.75,
								delay:
									(text1.length + text2.length + text3.length) * 0.055 + 1.75,
							}}
							style={{
								width: "fit-content",
								textDecoration: "none",
								cursor: "pointer",
							}}
							to={"/contact"}
							unstable_viewTransition
						>
							<Box
								sx={{
									display: "block",
									textTransform: "uppercase",
									paddingBlock: {
										sm: "1.5rem",
										xs: "1.4rem",
									},
									paddingInline: { sm: "2rem", xs: "1.5rem" },
									borderRadius: "2rem",
									fontWeight: 700,
									fontSize: "1rem",
									fontStyle: "normal",
									color: "primary.contrastText",
									backgroundColor: "primary.main",
								}}
								component="span"
							>
								Contact me
							</Box>
						</MLink>
					</Box>
				</Grid>

				<Grid
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
					}}
					item
					md={6}
				>
					<Box
						sx={{
							maxWidth: { md: "none", xs: 500 },
							width: { md: "90%", xs: "100%" },
							aspectRatio: "12/11",
							ml: { md: "auto", xs: 0 },
						}}
					>
						<MCarousel
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.75,
								delay:
									(text1.length + text2.length + text3.length) * 0.055 + 2.25,
							}}
							color={primary}
							autoplay
						>
							{carouselImages.map((item) => (
								<img
									key={item.alt}
									style={{
										height: "100%",
										width: "100%",
										marginInline: "auto",
										objectFit: "cover",
									}}
									src={item.src}
									alt={item.alt}
								/>
							))}
						</MCarousel>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
});

export default IntroSection;
