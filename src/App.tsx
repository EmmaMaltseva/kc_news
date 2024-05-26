import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom"

import Body from "./components/Body";


const App = () => {
    return (
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
}

export default App;
