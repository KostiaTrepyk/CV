import { Box } from "@mui/material";
import MeSection from "components/sections/MeSection";

import IntroSection from "components/sections/IntroSection";
import ProjectsSection from "components/sections/ProjectsSection";

const HomePage = () => {
	return (
		<Box component="main">
			<IntroSection />

			<ProjectsSection />

			<MeSection />
		</Box>
	);
};

export default HomePage;
