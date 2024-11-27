import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Alert, Box, Snackbar } from "@mui/material";

import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Rain from "./Rain";

const Layout = () => {
	const [open, setOpen] = useState(false);
	const isAlertDisabled = Boolean(
		JSON.parse(localStorage.getItem("alert") || "false")
	);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (!isAlertDisabled) {
			timeout = setTimeout(() => {
				setOpen(true);
				localStorage.setItem("alert", JSON.stringify(true));
			}, 2000);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [isAlertDisabled]);

	return (
		<Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
			<Rain />

			<Box
				sx={{
					minHeight: "100dvh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Nav />
				<Outlet />
				<Footer />
			</Box>

			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={open}
				autoHideDuration={7000}
				onClose={() => setOpen(false)}
			>
				<Alert
					onClose={() => setOpen(false)}
					severity="info"
					icon={false}
					sx={{
						width: "100%",
						fontSize: "1.2rem",
						paddingBlock: 1,
						paddingInline: 3,
						bgcolor: "primary.main",
						color: "primary.contrastText",
					}}
				>
					Try to refresh the page
				</Alert>
			</Snackbar>

			<ScrollRestoration />
		</Box>
	);
};

export default Layout;
