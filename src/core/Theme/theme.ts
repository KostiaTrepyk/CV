import { createTheme } from "@mui/material";

let r = Math.floor(Math.random() * 30);
let g = Math.floor(Math.random() * 30);
let b = Math.floor(Math.random() * 30);

if (r + g + b < 20) {
    r += 10;
    g += 10;
    b += 10;
}

export const background = `rgb(${r}, ${g}, ${b})`;
export const primary = `rgb(${r * 8.5}, ${g * 8.5}, ${b * 8.5})`;

export const theme = createTheme({
    palette: {
        mode: "dark",
        background: { default: background, paper: background },
        primary: { main: primary },
    },
    typography: { fontFamily: "Lato, sans-serif" },
});
