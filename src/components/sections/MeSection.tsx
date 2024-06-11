import { Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Phrase, phrases } from "data/phrases";

import quote from "assets/icons/quote.svg";
import NotMyImage from "assets/notMyImage.png";

const MeSection = () => {
	const choosedPhrase: Phrase = phrases.at(
		Math.round(Math.random() * (phrases.length - 1))
	)!;

	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexDirection: { md: "row", xs: "column" },
				gap: 6,
				pt: { sm: 6, xs: 4 },
				pb: { sm: 4, xs: 2 },
				px: { md: 4, sm: 2, xs: 0 },
			}}
			component="section"
		>
			<Paper
				sx={{
					p: 4,
					px: 9,
					borderRadius: 5,
					ml: { lg: 4, xs: 0 },
					mx: { sm: 0, xs: 2 },
					maxWidth: 520,
					position: "relative",
					color: "#ddd",
					boxShadow: "inset -1px 3px 10px 0.5px #fff1",
				}}
				elevation={5}
			>
				<Typography
					sx={{ fontSize: "1.3rem", fontStyle: "italic", fontWeight: 400 }}
				>
					{choosedPhrase?.phrase}
				</Typography>
				<Typography
					sx={{
						fontSize: "1.1rem",
						fontStyle: "italic",
						fontWeight: 400,
						mt: 1,
					}}
				>
					- {choosedPhrase?.author}
				</Typography>

				<Box
					sx={{
						color: "#888",
						userSelect: "none",
						position: "absolute",
						left: 20,
						top: 20,
						width: 30,
						aspectRatio: "1/1",
					}}
				>
					<img src={quote} alt="quote" />
				</Box>
				<Box
					sx={{
						color: "#888",
						userSelect: "none",
						position: "absolute",
						right: 20,
						bottom: 20,
						width: 30,
						rotate: "180deg",
					}}
				>
					<img src={quote} alt="quote" />
				</Box>
			</Paper>

			<Box
				sx={{
					display: "flex",
					flexDirection: { sm: "row", xs: "column" },
					alignItems: { sm: "normal", xs: "center" },
					gap: 2,
				}}
			>
				<Box
					sx={{
						borderRadius: "50%",
						maxHeight: 175,
						minHeight: 175,
						maxWidth: 175,
						minWidth: 175,
						backgroundImage: `url(${NotMyImage})`,
						backgroundSize: "70%",
						backgroundPosition: "50% 40%",
						backgroundRepeat: "no-repeat",
						bgcolor: (theme) => theme.palette.primary.dark,
						userSelect: "none",
					}}
				></Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: { sm: "flex-start", xs: "center" },
						py: 1,
						width: "max-content",
					}}
				>
					<Typography width="fit-content" mb={1} variant="h4">
						More about me
					</Typography>
					<Typography
						fontSize="0.9rem"
						width="fit-content"
						mb={3}
						variant="body1"
					>
						Click the button below to read more.
					</Typography>

					<Link
						style={{
							width: "fit-content",
							textDecoration: "none",
							cursor: "pointer",
						}}
						to={"/about"}
						unstable_viewTransition
					>
						<Box
							sx={{
								display: "block",
								textTransform: "uppercase",
								paddingBlock: {
									sm: "1.2rem",
									xs: "1.3rem",
								},
								paddingInline: { sm: "1.5rem", xs: "1.5rem" },
								borderRadius: "2rem",
								fontWeight: 700,
								fontSize: "0.8rem",
								fontStyle: "normal",
								color: "primary.contrastText",
								backgroundColor: "primary.main",
							}}
							component="span"
						>
							About me
						</Box>
					</Link>
				</Box>
			</Box>
		</Container>
	);
};

export default MeSection;
