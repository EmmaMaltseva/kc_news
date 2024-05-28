import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom"

import Body from "./components/Header/Body";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Body />
            <Footer />
        </BrowserRouter>
    )
}

export default App;
