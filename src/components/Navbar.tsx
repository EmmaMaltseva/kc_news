import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/main">Главная</Link>
                <Link to="/fashion">Мода</Link>
            </div>
        </div>
    );
};

export default Navbar;