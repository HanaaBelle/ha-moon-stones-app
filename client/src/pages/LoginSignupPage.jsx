import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LoginForm from '../components/LoginForm.jsx';
import Loginbg from '../assets/loginbg.jpg';
import SignupForm from '../components/SignupForm.jsx';
import Backicon from '../components/BackIcon.jsx';

import {NavLink} from 'react-router-dom';


const LoginSignuppage = () => {
    return (
        <div>
            <Header/>
            <div className="flex">
                <div className="w-1/2">
                    <div
                        className="bg-rose-100">
                        <div className="h-screen flex justify-center items-center">
                            <div className="min-w-[450px] px-8">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-medium">Register</h2>
                                    <p>Create your account. It's free and only take a minute</p>
                                </div>
                                <SignupForm/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="h-screen flex justify-center items-center">
                        <div className="bg-rose-100 bg-cover bg-no-repeat mt-7 shadow-lg"
                             style={{backgroundImage: `url(${Loginbg})`}}>
                            <div className="min-w-[450px] px-8">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-medium">Welcome Back!</h2>
                                    <p>Please enter your credentials to Sign In</p>
                                </div>
                                <LoginForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavLink to='/'><Backicon/></NavLink>
            <Footer/>
        </div>
    );
};

export default LoginSignuppage;
