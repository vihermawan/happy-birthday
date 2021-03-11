import React from "react";
import Header from "./Header";
import SrcollTop from "../button/ScrolTop";

const Layout: React.FC = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <SrcollTop/>
        </>
    );
};

export default Layout;