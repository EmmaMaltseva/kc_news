import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom"

import Header from "./components/Header/Header";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

export default App;
