import React, {FC} from 'react';
import {Link} from "react-router-dom";
import logo from "./logo.png";

const Navbar: FC = () => {

    return (
        <div className="header">
            <Link className="header-logo" to="/">
                <img
                    className="header-logo-image"
                    src={logo}
                    alt="Logo"
                    width="433" height="90" loading="lazy"
                />
            </Link>
            <nav className="header-menu">
                <ul className="header-menu-list">
                    <li className="header-menu-item">
                        <Link className="header-menu-link is-current" to="/">Главная</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link className="header-menu-link is-current" to="/fashion">Мода</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link className="header-menu-link is-current" to="/technology">Технологии</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link className="header-menu-link is-current" to="/sport">Спорт</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link className="header-menu-link is-current" to="/karpov">Karpov</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
