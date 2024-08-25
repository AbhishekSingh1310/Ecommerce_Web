import React from 'react';
import Logo from "../Assets/logo.png";
import './header.css';
import CountryDropDown from './CountryDropDown';
import Seacrh from './Seacrh';
import Account from './Account';

const Header = () => {
  return (
    <section className="header section my-2">
        <div className="container d-flex">
        <div className='logoWrapper'>
        <a href="#"><img src={Logo} alt="logo" className='logo' /></a>
        </div>
        <CountryDropDown/>
        <Seacrh/>
        <Account/>
        </div>
    </section>
  )
}

export default Header