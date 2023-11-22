import { RouterProvider } from "react-router-dom";
import { router } from "core/Router/router";
import { ThemeProvider } from "@emotion/react";

import { theme } from "core/Theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
