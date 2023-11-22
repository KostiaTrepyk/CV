import { Box, Container, List, Typography } from "@mui/material";
import { contacts } from "data/contacts";
import { Variants, motion } from "framer-motion";
import { Link } from "react-router-dom";

const MLink = motion(Link);
const MBox = motion(Box);

const iconButton: Variants = {
    initial: {
        rotateY: 0,
        scale: 1,
        y: 0,
    },
    hover: {
        rotateY: 360,
        scale: 1.2,
        y: -5,
    },
};

const ContactSection = () => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
            component="section"
            maxWidth="md"
        >
            <Box
                sx={{
                    minHeight: 250,
                    display: "grid",
                    placeContent: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2rem",
                        textAlign: "center",
                    }}
                >
                    Choose{" "}
                    <Typography
                        sx={{ fontSize: "inherit", color: "primary.main" }}
                        component="span"
                    >
                        your
                    </Typography>{" "}
                    way to{" "}
                    <Typography
                        sx={{ fontSize: "inherit", color: "primary.main" }}
                        component="span"
                    >
                        contact&nbsp;me
                    </Typography>
                </Typography>
            </Box>

            <Box>
                <Typography
                    sx={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
                    variant="h3"
                >
                    Contact options
                </Typography>

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
                        <MLink
                            initial="initial"
                            whileHover="hover"
                            style={{
                                flexGrow: 1,
                                textTransform: "capitalize",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "1rem",
                                color: "text.primary",
                                borderColor: "text.primary",
                                paddingBlock: "1rem",
                                paddingInline: "1.5rem",
                                borderRadius: "2rem",
                                fontSize: "1.2rem",
                                border: "1px solid white",
                            }}
                            key={contact.label}
                            to={contact.href}
                            target="_blank"
                        >
                            <MBox
                                variants={iconButton}
                                transition={{
                                    duration: 0.5,
                                }}
                            >
                                <contact.icon
                                    sx={{
                                        height: "2.25rem",
                                        width: "2.25rem",
                                    }}
                                />
                            </MBox>

                            <Typography
                                sx={{
                                    fontSize: "inherit",
                                }}
                            >
                                {contact.label}
                            </Typography>
                        </MLink>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default ContactSection;
