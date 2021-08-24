import React from 'react';
import HeaderContainer from "./Containers/header";
import Partners from "./Containers/partners";
import StackApp from "./Containers/stackApp";
import InfoApp from "./Containers/infoApp";
import Footer from "./Containers/footer";

const Main = () => {
    return (
        <>
            <HeaderContainer/>
            <InfoApp/>
            <StackApp/>
            <Partners/>
            <Footer/>
        </>
    );
};

export default Main;