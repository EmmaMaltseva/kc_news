import React, {FC} from 'react';
import logo from "../Header/logo.png";
import {Link} from "react-router-dom";
import './Footer.css'

const Footer:FC = () => {
    return (
        <footer className="footer">
            <div className="footer-main-inner container-my">
                <header className="footer-header">
                    <Link className="footer-logo" to="/main">
                        <img
                            className="footer-logo-image"
                            src={logo}
                            alt="Logo"
                            width="163" height="33" loading="lazy"
                        />
                    </Link>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-item">
                            <Link className="footer-menu-link is-current" to="/">Главная</Link>
                        </li>
                        <li className="footer-menu-item">
                            <Link className="footer-menu-link is-current" to="/fashion">Мода</Link>
                        </li>
                        <li className="footer-menu-item">
                            <Link className="footer-menu-link is-current" to="/technology">Технологии</Link>
                        </li>
                        <li className="footer-menu-item">
                            <Link className="footer-menu-link is-current" to="/sport">Музыка</Link>
                        </li>
                        <li className="footer-menu-item">
                            <Link className="footer-menu-link is-current" to="/karpov">Karpov</Link>
                        </li>
                    </ul>
                </header>
                <div className="footer-body">
                    <p>Сделано на Frontend курсе в <a className="footer-karpov-link" href="https://karpov.courses/">Karpov.Courses</a></p>
                    <p className="footer-copyright">© 2021</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;