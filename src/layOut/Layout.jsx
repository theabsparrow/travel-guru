import { Outlet } from "react-router-dom";
import coxbazar from "../../public/images/cox-bazar.png"
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
    return (
        <div className="relative">
            <div style={{ backgroundImage: `url(${coxbazar})` }} className="h-[100vh] w-[100vw] lg:w-auto lg:min-h-screen bg-cover bg-center bg-image">
            </div>
            <div className="absolute top-0 w-full">
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Layout;