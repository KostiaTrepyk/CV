import { Box, Paper, Typography } from "@mui/material";
import { type IQuote } from "data/quotes";

import quoteSvg from "assets/icons/quote.svg";

interface QuoteProps {
	quote: IQuote;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
	return (
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
				{quote.quote}
			</Typography>
			<Typography
				sx={{
					fontSize: "1.1rem",
					fontStyle: "italic",
					fontWeight: 400,
					mt: 1,
				}}
			>
				- {quote.author}
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
				<img src={quoteSvg} alt="quote" />
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
				<img src={quoteSvg} alt="quote" />
			</Box>
		</Paper>
	);
};

export default Quote;
