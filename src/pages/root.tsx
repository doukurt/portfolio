import Header from "../components/header/header.tsx";
import Footer from "../components/footer/footer.tsx";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className={`h-[calc(100vh_-_103px)]`}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default Root;