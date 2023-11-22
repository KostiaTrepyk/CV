import { Stack } from "@mui/material";

interface ProjectListProps extends React.PropsWithChildren {}

const ProjectList: React.FC<ProjectListProps> = ({ children }) => {
    return (
        <Stack
            sx={{
                listStyle: "none",
                padding: 0,
                margin: 0,
            }}
            justifyContent="space-evenly"
            direction="row"
            flexWrap="wrap"
            gap={2}
            component="ul"
        >
            {children}
        </Stack>
    );
};

export default ProjectList;
