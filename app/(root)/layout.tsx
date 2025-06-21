import React from 'react'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer />
        </div>

    )
}
export default Layout
