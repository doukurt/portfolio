import {useEffect, useState} from "react";
import HeaderButton from "./headerButton.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    if (localStorage.getItem('darkMode') === null) {
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? localStorage.setItem('darkMode', 'true') : localStorage.setItem('darkMode', 'false');
    }
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');
    const [activeTab, setActiveTab] = useState<string>(window.location.pathname);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className="flex flex-row w-full h-14 border-b dark:border-divider-primary">
            <div className="mx-3 basis-auto md:basis-2/12 text-base self-center">dogukan-kurt</div>
            <div className="md:flex flex-row w-full hidden">
                <Link onClick={() => setActiveTab("/")} to={`/`}><HeaderButton isActive={activeTab === "/"}
                                                                               text={"_hello"}/></Link>
                <Link onClick={() => setActiveTab("/about")} to={`/about`}><HeaderButton
                    isActive={activeTab === "/about"} text={"_about-me"}/></Link>
                <Link onClick={() => setActiveTab("/projects")} to={`/projects`}><HeaderButton
                    isActive={activeTab === "/projects"} text={"_projects"}/></Link>
                <Link onClick={() => setActiveTab("/blogs")} to={`/blogs`}><HeaderButton
                    isActive={activeTab === "/blogs"}
                    text={"_blogs"}/></Link>
                <button onClick={() => setDarkMode(() => {
                    localStorage.setItem('darkMode', (!darkMode).toString());
                    return !darkMode
                })}
                        className="p-4 ml-auto w-fit h-full border-l dark:border-divider-primary">
                    {darkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>}
                </button>
                <Link onClick={() => setActiveTab("/contact")} to={"/contact"}><HeaderButton
                    isActive={activeTab === "/contact"}
                    text={"_contact-me"}/></Link>
            </div>
            <div className="rounded self-center ml-auto cursor-pointer mr-2 md:hidden"><i
                className="bi bi-list text-4xl"></i></div>
        </header>
    );
};
export default Header;
