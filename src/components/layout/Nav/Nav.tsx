import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import {
	Box,
	Container,
	Divider,
	Drawer,
	IconButton,
	Stack,
	Typography,
	styled,
} from "@mui/material";
import { gitHubLink } from "data/links";

import NavLink, { ILink } from "./NavLink";
import { motion } from "framer-motion";

const MContainer = motion(Container);

interface NavProps {}

const links: ILink[] = [
	{ href: "/about", label: "About" },
	{ href: gitHubLink, label: "GitHub", target: "_blank" },
	{ href: "/contact", label: "Contact" },
];

export const navHeight = 80;

const Nav: React.FC<NavProps> = () => {
	const location = useLocation();

	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	return (
		<>
			<MContainer
				sx={{
					position: "sticky",
					top: 0,
					zIndex: 1000,
					height: navHeight,
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					bgcolor: "background.default",
					letterSpacing: "0.05rem",
					boxShadow: (theme) =>
						`0px 10px 25px 0px ${theme.palette.background.paper}, 0px 3px 5px 0px ${theme.palette.background.paper}`,
				}}
				// @ts-ignore
				component="nav"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Link to="/" unstable_viewTransition>
					<Typography
						sx={{
							fontSize: "1.5rem",
							fontWeight: 600,
							letterSpacing: "inherit",
						}}
						variant="h1"
					>
						Spectrum CV
					</Typography>
				</Link>

				<Stack
					sx={{
						display: { sm: "flex", xs: "none" },
					}}
					direction="row"
					spacing={{ md: 3, sm: 1 }}
				>
					{links.map((link) => (
						<NavLink key={link.label} link={link} />
					))}
				</Stack>

				<IconButton
					sx={{
						color: "primary.main",
						height: "50px",
						aspectRatio: "1/1",
						display: { sm: "none", xs: "grid" },
						placeContent: "center",
						borderStyle: "solid",
						borderWidth: "2px",
						borderColor: "primary.dark",
						borderRadius: "0.5rem",
					}}
					title="Open menu"
					onClick={() => setIsMenuOpened(true)}
				>
					<Menu />
				</IconButton>
			</MContainer>

			<Drawer
				open={isMenuOpened}
				onClose={() => setIsMenuOpened(false)}
				anchor="right"
			>
				<Box
					sx={{
						width: 250,
						paddingInline: 1,
					}}
				>
					<DrawerHeader
						sx={{
							height: navHeight,
						}}
					>
						<IconButton
							sx={{
								color: "primary.main",
								height: 50,
								aspectRatio: "1/1",
								display: { sm: "none", xs: "grid" },
								placeContent: "center",
								borderStyle: "solid",
								borderWidth: "2px",
								borderColor: "primary.dark",
								borderRadius: "0.5rem",
							}}
							title="Close menu"
							onClick={() => setIsMenuOpened(false)}
						>
							<Close />
						</IconButton>
					</DrawerHeader>

					<Divider />

					<Stack gap={1} marginTop={2}>
						{links.map((link) => (
							<Typography
								key={link.label}
								sx={{
									color:
										link.href === location.pathname
											? "primary.light"
											: "text.primary",
									padding: "0.75rem",
									textAlign: "center",
									fontSize: "1.2rem",
									fontWeight: 700,
									letterSpacing: "0.03rem",
								}}
							>
								<Link
									to={link.href}
									target={link.target}
									onClick={() => setIsMenuOpened(false)}
								>
									{link.label}
								</Link>
							</Typography>
						))}
					</Stack>
				</Box>
			</Drawer>
		</>
	);
};

export default Nav;

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));
