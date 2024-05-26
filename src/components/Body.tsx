import React, {FC} from 'react';
import Navbar from "./Navbar";
import Router from "./Router"

const Body:FC = () => {
    return (
        <div className="body">
            <Navbar />
            <Router />
        </div>
    );
};

export default Body;