import React from "react";
import {NavLink} from "react-router-dom";
import LoginIcon from "./LoginIcon.jsx";
// import CartIcon from './CartIcon';
import CartIcon from "./CartIcon.jsx";

const Header = () => {
    return (
        <div className="bg-bleuGris flex p-2">
            <NavLink to="/" className="flex-auto">
                Home(logo du site)
            </NavLink>
            <h1 className="flex-auto">HA Moon Stones Marketplace</h1>
            <NavLink to="/login">
                <LoginIcon/>
            </NavLink>
            <NavLink to="/cart">
                <CartIcon/>
            </NavLink>
        </div>
    );
};

export default Header;
