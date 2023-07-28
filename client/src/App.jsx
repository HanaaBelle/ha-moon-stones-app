import { useState } from 'react';
import './App.css';
import './Style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage.jsx"
import AdminPage from "./pages/AdminPage";
import LoginSignupPage from "./pages/LoginSignupPage"
import JewelriesPage from './pages/JewelriesPage';
import SingleJewelryPage from './pages/SingleJewelryPage';
import CartPage from './pages/CartPage';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='*' element={<HomePage/>} />
                    <Route path='/admin' element={<AdminPage/>}/>
                    <Route path='/loginSignup' element={<LoginSignupPage/>} />
                    <Route path='/jewelries/' element={<JewelriesPage/>} />
                    <Route path='/singleJewelry/:id' element={<SingleJewelryPage/>} />
                    <Route path='/cart' element={<CartPage/>} />

                </Routes>

            </BrowserRouter>

        </>
    )
}

export default App
