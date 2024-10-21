import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import AboutMe from "../pages/aboutMe";
import Proyects from "../pages/proyects";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/aboutMe",
        element: <AboutMe />,
    }, {
        path: "/proyects",
        element: <Proyects />
    }
]);

function Routes() {
    return (
        <RouterProvider router={routes} />
    );
}

export default Routes;
