import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout() {
    return (
        <>
            <ToastContainer/>
            <Header/>
            <MobileHeader/>
            <Outlet/>
        </>
    );
}

export default MainLayout;
