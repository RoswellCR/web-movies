import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/cinta3.png';
import userIcon from '../assets/statics/user-icon.png';
//import Contacto from './Contacto';
//import About from './About';

const Header = () => (
    
   <header className="header">
        <Link to="/"><img className="header__img" src={logo} alt="Best Video"/></Link>
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={userIcon} alt=""/>
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
            <li><a href="/">About</a></li> 
            <Link to="/contacto"><li><a href="/">Contacto</a></li></Link>
        
        </ul>
        </div>
    </header>

);



    
export default Header;