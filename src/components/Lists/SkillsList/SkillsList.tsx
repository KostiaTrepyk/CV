import { Box, Paper, Stack, Typography } from "@mui/material";
import { primary } from "core/Theme/theme";
import Tilt from "react-parallax-tilt";

export interface Skill {
    iconSrc?: string;
    label: string;
}

interface SkillsListProps {
    skills: Skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
    return (
        <Stack
            sx={{
                listStyle: "none",
                margin: 0,
                padding: 0,
            }}
            direction="row"
            flexWrap="wrap"
            gap={2}
            component="ul"
        >
            {skills.map((skill) => (
                <Tilt
                    key={skill.label}
                    style={{ height: "100%", flex: "1 1 auto" }}
                    tiltEnable={false}
                    glareEnable={true}
                    glareMaxOpacity={0.3}
                    glareBorderRadius="1.5rem"
                    glareColor={primary}
                    glarePosition="all"
                    transitionSpeed={5000}
                >
                    <Paper
                        sx={{
                            paddingBlock: 2,
                            paddingInline: 3,
                            height: "3rem",
                            borderRadius: "1.5rem",
                            display: "flex",
                            justifyContent: "center",
                            lineClamp: 1,
                            gap: 2,
                            alignItems: "center",
                            width: "100%",
                            boxShadow:
                                "inset 1px 1px 2px #fff1, 2px 5px 10px #0003",
                        }}
                        elevation={12}
                        component="li"
                    >
                        {skill.iconSrc && (
                            <Box
                                sx={{
                                    height: "100%",
                                    aspectRatio: "1/1",
                                }}
                                component="img"
                                src={skill.iconSrc}
                                alt=""
                            />
                        )}

                        <Typography sx={{ fontSize: "1rem" }}>
                            {skill.label}
                        </Typography>
                    </Paper>
                </Tilt>
            ))}
        </Stack>
    );
};

export default SkillsList;
