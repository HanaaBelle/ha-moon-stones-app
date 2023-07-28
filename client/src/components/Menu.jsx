import React from "react";
import {NavLink} from "react-router-dom";

function Menu(){
    return(
        <div className="menu flex justify-center items-center">
            <ul>
                <li>
                    <NavLink to="/" className="flex justify-center items-center">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex justify-center items-center">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex justify-center items-center">
                        Concept
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex justify-center items-center">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu