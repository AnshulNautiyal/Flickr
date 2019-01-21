import React from 'react';
import logo from "./../../images/flickr.png";
import NavClass from './Navigation.module.css';
import SearchBar from './../SerachBar/searchBar';
import {Link} from 'gatsby';

const HeaderNavigation = () => (
    <nav className={NavClass.customNavbar + " navbar"} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <img style={{color:'white'}} src={logo} width="112" height="28" alt="Flickr"/>
            </Link>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            
            <SearchBar />

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-light">Log in</a>
                        <a className="button is-primary"><strong>Sign up</strong></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default HeaderNavigation;