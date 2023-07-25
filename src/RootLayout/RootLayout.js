import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <main>
                {/* Renders the child route's element, if there is one. */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
