import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// @ts-ignore
import HomePage from "../pages/HomePage"
// @ts-ignore
import AdminPage from "../pages/AdminPage";
// @ts-ignore
import LoginSignupPage from "./pages/LoginSignupPage"
// @ts-ignore
import JewelriesPage from '../pages/JewelriesPage';
// @ts-ignore
import SingleJewelryPage from '../pages/SingleJewelryPage';
// @ts-ignore
import CartPage from '../pages/CartPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='*' element={<HomePage/>} />
                <Route path='/admin' element={<AdminPage/>}/>
                <Route path='/login' element={<LoginSignupPage/>} />
                <Route path='/furnitures' element={<JewelriesPage/>} />
                <Route path='/singlefurniture' element={<SingleJewelryPage/>} />
                <Route path='/cart' element={<CartPage/>} />

            </Routes>

        </BrowserRouter>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
