import React from "react";
import {NavLink} from "react-router-dom";
import LoginIcon from "./LoginIcon.jsx";
// import CartIcon from './CartIcon';
import CartIcon from "./CartIcon.jsx";
import Logo from "./Logo.jsx";

const Header = () => {
    return (
        <div className=" flex justify-around p-4 text-center">
            <NavLink to="/" className="flex justify-center items-center">
                <Logo/>
            </NavLink>
            <h1 className="flex justify-center items-center text-black mx-4">HA Moon Stones Marketplace</h1>
            <div className="flex justify-center items-center">
                <NavLink to="/loginSignup">
                    <LoginIcon/>
                </NavLink>
                <NavLink to="/cart" className="flex justify-center items-center">
                    <CartIcon/>
                </NavLink>
            </div>
        </div>

    );
};

export default Header;
