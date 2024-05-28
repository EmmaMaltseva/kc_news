import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom"

import Body from "./components/Header/Body";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <BrowserRouter>
            <Body />
            <Footer />
        </BrowserRouter>
    )
}

export default App;
