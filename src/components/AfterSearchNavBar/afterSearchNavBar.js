import React from 'react';
import logo from "./../../images/flickr.png";
import { Link } from 'gatsby';
import SearchBar from './../SerachBar/searchBar';


const afterSearchNavBar = () => (

    <section className="hero is-primary is-medium customAfterSearchNavBar">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img style={{ color: 'white' }} src={logo} width="112" height="28" alt="Flickr" />
                        </Link>
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                        
                            <a className="navbar-item">Explore</a>
                            <a className="navbar-item">Create</a>
                            <a className="navbar-item">Get Pro</a>
                            
                        <div className="navbar-end">
                            {
                                window.location.pathname === "/groups" && <SearchBar />
                            }
                            <span className="icon is-large">
                                <i className="fas fa-2x fa-cloud-upload-alt"></i>
                            </span>
                            <a className="navbar-item">Log In</a>
                            <span className="navbar-item ">
                                <a className="button is-info">
                                    <span><strong>Sign Up</strong></span>
                                </a>
                            </span>
                            
                        </div>

                    </div>
                </div>
            </nav>
        </div>
  </section>

)

export default afterSearchNavBar;