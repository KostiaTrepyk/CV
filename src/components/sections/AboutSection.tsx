import { forwardRef } from "react";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { primary } from "core/Theme/theme";

import SkillsList, { Skill } from "components/Lists/SkillsList/SkillsList";

import Html5Icon from "assets/icons/html5.svg";
import CSS3Icon from "assets/icons/css3.svg";
import ReactIcon from "assets/icons/react.svg";
import ReduxIcon from "assets/icons/redux.svg";
import MUIIcon from "assets/icons/mui.svg";
import FramerIcon from "assets/icons/framer.svg";
import TailwindCSSIcon from "assets/icons/tailwindcss.svg";
import GitHubIcon from "assets/icons/github.svg";
import NestJsIcon from "assets/icons/nestjs.svg";
import TypescriptIcon from "assets/icons/typescript.svg";

import a from "assets/a.svg";
import myImage from "assets/myImage.png";

interface AboutSectionProps {}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>((_, ref) => {
    const skills: Skill[] = [
        { iconSrc: Html5Icon, label: "HTML5" },
        { iconSrc: CSS3Icon, label: "CSS3" },
        { label: "RWD" },
        { iconSrc: ReactIcon, label: "React" },
        { iconSrc: ReduxIcon, label: "Redux" },
        { iconSrc: MUIIcon, label: "Material UI" },
        { iconSrc: FramerIcon, label: "Framer Motion" },
        { iconSrc: TailwindCSSIcon, label: "Tailwind CSS" },
        { iconSrc: GitHubIcon, label: "Git" },
        { iconSrc: NestJsIcon, label: "NestJs" },
        { iconSrc: TypescriptIcon, label: "Typescript" },
        { label: "MySQL" },
    ];

    const codingSince = [
        { date: new Date(2019, 7), label: "HTML" },
        { date: new Date(2019, 7), label: "CSS" },
        {
            date: new Date(2020, 2),
            label: "JavaScript",
        },
        {
            date: new Date(2023, 3),
            label: "TypeScript",
        },
        {
            date: new Date(2023, 1),
            label: "React",
        },
        {
            date: new Date(2023, 2),
            label: "Redux",
        },
        {
            date: new Date(2023, 3),
            label: "NestJs",
        },
    ];

    return (
        <Container
            sx={{
                py: { sm: 4, xs: 2 },
            }}
            component="section"
            ref={ref}
        >
            <Grid
                sx={{
                    mt: 2,
                }}
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Paper
                        sx={{
                            backgroundImage: `url(${a}), linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))`,
                            backgroundSize: "cover",
                            minHeight: { sm: "9rem", xs: "8rem" },
                            borderRadius: { sm: "4.5rem", xs: "1.5rem" },
                            display: "flex",
                            alignItems: "center",
                            flexDirection: { sm: "row", xs: "column" },
                            textAlign: { sm: "left", xs: "center" },
                            gap: 2,
                            padding: 3,
                            mb: 2,
                        }}
                        elevation={10}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: { sm: "7rem", xs: "7rem" },
                                bgcolor: "#151515",
                                aspectRatio: "1/1",
                                borderRadius: "50%",
                            }}
                            src={myImage}
                            alt=""
                        ></Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.15rem",
                                }}
                                variant="h2"
                            >
                                Kostia
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.05rem",
                                    marginBottom: "0.3rem",
                                    color: "primary.light",
                                }}
                            >
                                Frontend developer
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    fontWeight: 300,
                                    letterSpacing: "0.05rem",
                                    color: "text.disabled",
                                }}
                            >
                                Learning is a treasure that will follow its
                                owner everywhere
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid
                    item
                    md={4}
                    sm={6}
                    xs={12}
                >
                    <Paper
                        sx={{
                            height: "100%",
                            paddingBlock: { sm: 4, xs: 3 },
                            paddingInline: { sm: 4, xs: 3 },
                            borderRadius: "1.5rem",
                        }}
                        elevation={6}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 400,
                                marginBottom: "1rem",
                            }}
                            variant="h3"
                        >
                            Skills
                        </Typography>

                        <SkillsList skills={skills} />
                    </Paper>
                </Grid>

                <Grid
                    item
                    md={4}
                    sm={6}
                    xs={12}
                >
                    <Paper
                        sx={{
                            height: "100%",
                            paddingBlock: { sm: 4, xs: 3 },
                            paddingInline: { sm: 4, xs: 3 },
                            borderRadius: "1.5rem",
                        }}
                        elevation={6}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.3rem",
                                fontWeight: 600,
                                marginBottom: "1rem",
                            }}
                            variant="h3"
                        >
                            About me
                        </Typography>
                        <Typography
                            sx={{
                                pb: 1.5,
                                fontSize: "1rem",
                                letterSpacing: "0.1rem",
                            }}
                        >
                            Hello, my name is Kostia.
                        </Typography>
                        <Typography
                            sx={{
                                py: 1.5,
                                fontSize: "1rem",
                                lineHeight: "1.4rem",
                                letterSpacing: "0.05rem",
                            }}
                        >
                            I have dedicated countless hours to coding over the
                            past year. With consistent daily coding practice, I
                            have continuously sharpened my skills and expanded
                            my knowledge in front-end and back-end development.
                        </Typography>

                        <Typography
                            sx={{
                                py: 1.5,
                                fontSize: "1rem",
                                lineHeight: "1.4rem",
                                letterSpacing: "0.05rem",
                            }}
                        >
                            Studying at the technical school gave me versatile
                            knowledge in the field of IT, which significantly
                            accelerated my learning process. However, I had to
                            learn most of it on my own, which taught me to
                            search for information and solve issues on my own.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid
                    item
                    md={4}
                    xs={12}
                >
                    <Paper
                        sx={{
                            height: "100%",
                            paddingBlock: { sm: 4, xs: 3 },
                            paddingInline: { sm: 4, xs: 3 },
                            borderRadius: "1.5rem",
                        }}
                        elevation={6}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.3rem",
                                fontWeight: 600,
                                marginBottom: "1rem",
                            }}
                            variant="h3"
                        >
                            Coding since
                        </Typography>

                        <Stack
                            flexDirection="row"
                            flexWrap="wrap"
                            gap={2}
                        >
                            {codingSince.map((item, index) => {
                                const now = new Date();

                                const year =
                                    now.getFullYear() - item.date.getFullYear();

                                const month =
                                    now.getMonth() - item.date.getMonth();

                                let text: string = "";

                                if (year > 0) {
                                    if (year !== 1) text = `${year} years`;
                                    else text = `${year} year`;
                                }

                                if (text.length > 0 && month > 0) text += ", ";

                                if (month > 0) {
                                    if (month !== 1) text += `${month} months`;
                                    else text += `${month} month`;
                                }

                                return (
                                    <Tilt
                                        key={index}
                                        style={{
                                            height: "100%",
                                            flex: "1 1 auto",
                                        }}
                                        tiltEnable={false}
                                        glareEnable={true}
                                        glareMaxOpacity={0.3}
                                        glareBorderRadius="1rem"
                                        glareColor={primary}
                                        glarePosition="all"
                                        transitionSpeed={5000}
                                    >
                                        <Paper
                                            sx={{
                                                flex: "1 1 80px",
                                                padding: 2,
                                                borderRadius: "1rem",
                                                boxShadow:
                                                    "inset 1px 1px 2px #fff1, 2px 5px 10px #0003",
                                            }}
                                            elevation={12}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "primary.light",
                                                    fontWeight: 700,
                                                    textAlign: "center",
                                                    marginBottom: "0.2rem",
                                                }}
                                            >
                                                {item.label}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    textAlign: "center",
                                                    color: "text.secondary",
                                                }}
                                            >
                                                {text}
                                            </Typography>
                                        </Paper>
                                    </Tilt>
                                );
                            })}
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
});

export default AboutSection;
