import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ErrorPage from "pages/ErrorPage";

import Layout from "components/layout/Layout";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
]);

export { router };
