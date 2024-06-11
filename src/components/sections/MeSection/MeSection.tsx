import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { IQuote, quotes } from "data/quotes";
import NotMyImage from "assets/notMyImage.png";
import Quote from "./Quote";
import AboutMe from "./AboutMe";

const MeSection = () => {
	const choosedPhrase: IQuote = quotes.at(
		Math.round(Math.random() * (quotes.length - 1))
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
			<Quote quote={choosedPhrase} />

			<AboutMe />
		</Container>
	);
};

export default MeSection;
