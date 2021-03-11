import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SrcollTop from "../button/ScrolTop";

const Layout: React.FC = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <SrcollTop/>
            <Footer />
        </>
    );
};

export default Layout;