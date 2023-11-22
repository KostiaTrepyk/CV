import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { type Variants, motion } from "framer-motion";

const MBox = motion(Box);

const animations: Variants = {
    initial: {
        y: 20,
        scale: 0.95,
    },
    inView: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -5,
        scale: 0.98,
    },
};

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

interface ProjectListItemProps {
    project: Project;
}

const ProjectListItem = forwardRef<HTMLLIElement, ProjectListItemProps>(
    ({ project }, ref) => {
        return (
            <MBox
                initial="initial"
                whileInView="inView"
                whileHover={"hover"}
                variants={animations}
                transition={{
                    ease: "easeOut",
                    duration: 0.25,
                }}
                sx={{
                    flex: "1 1 320px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    paddingInline: 3,
                    paddingBlock: 5,
                    borderRadius: "2rem",
                    maxWidth: "500px",

                    backgroundImage: (theme) =>
                        `linear-gradient(-235deg, ${theme.palette.primary.dark} -100%, #ffffff10 10% 70%, ${theme.palette.primary.main} 300%)`,
                    boxShadow: "inset 0px 0px 2px #fff1",
                }}
                component="li"
                ref={ref}
            >
                <Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "1.8rem",
                            fontWeight: 600,
                            marginBottom: 1,
                        }}
                        variant="h3"
                    >
                        {project.title}
                    </Typography>

                    <Typography
                        sx={{
                            letterSpacing: "0.03rem",
                            color: "text.secondary",
                        }}
                    >
                        {project.description}
                    </Typography>
                </Box>

                <Stack
                    sx={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(110px,1fr))",
                        gridAutoRows: "1fr",
                        gap: "0.5rem",
                    }}
                    component="ul"
                >
                    {project.technologies.map((technology) => (
                        <Paper
                            key={technology}
                            sx={{
                                textAlign: "center",
                                padding: 1.5,
                                borderRadius: "1rem",
                                boxShadow: 0,
                            }}
                            elevation={10}
                            component="li"
                        >
                            <Typography>{technology}</Typography>
                        </Paper>
                    ))}
                </Stack>

                <Link
                    style={{
                        textDecoration: "none",
                        marginTop: "auto",
                        marginInline: "auto",

                        cursor: "pointer",
                    }}
                    to={project.link}
                    target="_blank"
                >
                    <Box
                        sx={{
                            display: "block",
                            textTransform: "uppercase",
                            paddingBlock: "1rem",
                            paddingInline: "1.2rem",
                            borderRadius: "1.5rem",
                            fontWeight: 600,
                            fontSize: "0.9rem",

                            color: "primary.contrastText",
                            backgroundColor: "primary.main",
                        }}
                        component="span"
                    >
                        Check out
                    </Box>
                </Link>
            </MBox>
        );
    }
);

export default ProjectListItem;
