import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import NotMyImage from "assets/notMyImage.png";

const AboutMe = () => {
	return (
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
	);
};

export default AboutMe;
