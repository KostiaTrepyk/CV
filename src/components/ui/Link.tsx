import { Link as MuiLink, type LinkProps as MuiLinkProps } from "@mui/material";
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router-dom";

export interface AppLinkProps extends Omit<MuiLinkProps<typeof RouterLink>, "component" | "to"> {
	to: RouterLinkProps["to"];
}

export default function AppLink({ to, children, sx, ...props }: AppLinkProps) {
	return (
		<MuiLink
			component={RouterLink}
			to={to}
			color="primary.main"
			underline="always"
			sx={[{ fontSize: "inherit" }, ...(Array.isArray(sx) ? sx : [sx])]}
			{...props}
		>
			{children}
		</MuiLink>
	);
}
