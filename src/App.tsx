import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import MainPage from "./pages/MainPage";
import FashionPage from "./pages/FashionPage";
import {Error} from "./pages/Error";
import Navbar from "./components/Navbar";
import NewsItemPage from "./pages/NewsItemPage";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/fashion" element={<FashionPage />}/>
                <Route path="*" element={<Error />}/>
                <Route path="/main/:id" element={<NewsItemPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
