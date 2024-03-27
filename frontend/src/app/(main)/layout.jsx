import React from 'react'
import Navbar from './navbar';
import { FooterCentered } from './footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <FooterCentered/>
        </>
    )
}

export default MainLayout;