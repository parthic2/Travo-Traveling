import React from 'react';
import NavbarInner from '../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <NavbarInner />
            <Outlet />
            <Footer />
        </>
    )
}

export default Index;