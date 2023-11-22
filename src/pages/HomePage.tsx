import { Box } from "@mui/material";

import IntroSection from "components/sections/IntroSection";
import ProjectsSection from "components/sections/ProjectsSection";

const HomePage = () => {
    return (
        <Box component="main">
            <IntroSection />

            <ProjectsSection />
        </Box>
    );
};

export default HomePage;
