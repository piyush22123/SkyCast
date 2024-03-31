import { useState } from 'react'
import './App.css'
import Home from './pages/homepage/Home'
import Menu from './pages/Alldays/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enterdata from './pages/Landingpage/Enterdata';

import Loader from './components/Loader/Loader';
function App() {

  return (
    <>
        <div className="main">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Enterdata />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Alldays" element={<Menu />} />
              </Routes>
            </BrowserRouter>
        </div> 
    </>
  )
}

export default App
