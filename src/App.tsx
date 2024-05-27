import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom"

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Footer />
        </BrowserRouter>
    )
}

export default App;
