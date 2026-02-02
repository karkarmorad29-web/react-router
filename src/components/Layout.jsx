import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> {/* Qui verranno renderizzate le sottopagine */}
            </main>
        </>
    );
};

export default Layout;