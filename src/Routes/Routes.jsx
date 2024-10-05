import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurPortfolio from "../Pages/OurPortfolio/OurPortfolio";
import AboutUs from "../Pages/AboutUs/AboutUs";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "ourPortfolio",
                element: <OurPortfolio></OurPortfolio>
            },
            {
                path: "aboutUs",
                element: <AboutUs></AboutUs>
            }
        ]
    },
]);