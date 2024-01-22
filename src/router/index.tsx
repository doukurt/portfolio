import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/root.tsx";
import AboutMe from "../pages/aboutme.tsx";
import Index from "../pages/index.tsx";
import ContactPage from "../pages/contact.tsx";
import Projects from "../pages/projects.tsx";
import BlogPage from "../pages/blogs.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Index/>,
            },
            {
                path: "/about",
                element: <AboutMe/>,
            },
            {
                path: "/contact",
                element: <ContactPage/>,
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/blogs",
                element: <BlogPage/>
            },
        ],
        errorElement: <div className="d-flex w-full text-center text-3xl pt-44">404 Not Found</div>,
    },

]);

export default router;