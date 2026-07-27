import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Container, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { contacts } from "data/contacts";

import Wawes from "./Wawes/Wawes";

const MContainer = motion(Container);

const Footer = () => {
	return (
		<Box
			sx={{
				position: "relative",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				minHeight: 250,
			}}
			component="footer"
		>
			<MContainer
				sx={{
					zIndex: 1,
				}}
				disableGutters
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<List
					sx={{
						width: "100%",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						alignItems: "center",
						gap: 2,
					}}
				>
					{contacts.map((contact) => (
						<ListItem
							key={contact.label}
							sx={{
								padding: 0,
								width: "fit-content",
							}}
						>
							<Link
								style={{
									display: "block",
									paddingBlock: 8,
									paddingInline: 16,
									color: "inherit",
									textDecoration: "inherit",
									textAlign: "center",
								}}
								to={contact.href}
								target="_blank"
							>
								<ListItemIcon
									sx={{
										display: "grid",
										placeContent: "center",
										width: "100%",
										height: 50,
										color: "white",
									}}
								>
									<contact.icon />
								</ListItemIcon>

								<ListItemText>{contact.label}</ListItemText>
							</Link>
						</ListItem>
					))}
				</List>
			</MContainer>

			<Wawes
				sx={{
					position: "absolute",
					bottom: 0,
					left: 0,
					width: "100%",
					height: "100%",
					pointerEvents: "none", // Гарантирует, что волна не перекроет клики по ссылкам Github/Email
					zIndex: 0,
				}}
			/>
		</Box>
	);
};

export default Footer;
