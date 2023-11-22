import { Link } from "react-router-dom";
import {
    Box,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { contacts } from "data/contacts";

import Wawes from "./Wawes/Wawes";

const Footer = () => {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                minHeight: 250,
            }}
            component="footer"
        >
            <Container
                sx={{
                    zIndex: 1,
                }}
                disableGutters
            >
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
                        <ListItem
                            key={contact.label}
                            sx={{
                                padding: 0,
                                width: "fit-content",
                            }}
                        >
                            <Link
                                style={{
                                    display: "block",
                                    paddingBlock: 8,
                                    paddingInline: 16,
                                    color: "inherit",
                                    textDecoration: "inherit",
                                    textAlign: "center",
                                }}
                                to={contact.href}
                                target="_blank"
                            >
                                <ListItemIcon
                                    sx={{
                                        display: "grid",
                                        placeContent: "center",
                                        width: "100%",
                                        height: 50,
                                        color: "white",
                                    }}
                                >
                                    <contact.icon />
                                </ListItemIcon>

                                <ListItemText>{contact.label}</ListItemText>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Container>

            <Wawes
                sx={{
                    position: "absolute",
                    width: { md: "100%", sm: "170%", xs: "220%" },
                    aspectRatio: "1440/390",
                    bottom: { xl: -200, lg: -80, md: -50, sm: -80, xs: -20 },
                }}
            />
        </Box>
    );
};

export default Footer;
