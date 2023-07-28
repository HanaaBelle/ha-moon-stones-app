import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Backicon from "../components/BackIcon.jsx";
import DashBoard from "../components/dashBoard.jsx";
import "../adminPage.css";

import {NavLink} from "react-router-dom";

const AdminPage = () => {
    return (
        <div className="page">
            <Header/>
            <main className="bg-bleuFond flex flex-col justify-around items-center">
                <h1 className="uppercase font-bold">Admin Page</h1>
                <DashBoard/>
            </main>
            <NavLink to="/">
                <Backicon/>
            </NavLink>
            <Footer/>
        </div>
    );
};

export default AdminPage;

