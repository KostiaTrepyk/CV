import { email, gitHubLink, linkedInLink, telegramLink } from "./links";

import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export const contacts: Contact[] = [
    {
        label: "GitHub",
        href: gitHubLink,
        icon: GitHubIcon,
    },
    {
        label: "Email",
        href: "mailto:" + email,
        icon: EmailIcon,
    },
    {
        label: "LinkedIn",
        href: linkedInLink,
        icon: LinkedInIcon,
    },
    {
        label: "Telegram",
        href: telegramLink,
        icon: TelegramIcon,
    },
];

export interface Contact {
    label: string;
    href: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
}
