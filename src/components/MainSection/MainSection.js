import React from 'react';
import HeaderNavigation from './../Navigation/HeaderNavigation';
import bulmaCarousel from './../../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js';
bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances

const MainSection = () => (
    <section className="hero is-fullheight has-carousel">
        <div className="hero-head">
            <HeaderNavigation />
        </div>
        <div className="hero-body">
            <div className="container has-text-centered has-text-white customHeading">
                <h1 className="title">Find your inspiration.</h1>
                <h2 className="subtitle">Join the Flickr community, home to tens of billions of photos and 2 million groups.</h2>
                <a className="button is-large customButton">Sign Up</a>
            </div>
            <div className="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true" data-delay="2000">
                <div className='carousel-container'>
                    <div className='carousel-item has-background is-active'>
                        <img className="is-background" src="https://source.unsplash.com/1600x900/?desert" alt="" />
                    </div>
                    <div className='carousel-item has-background'>
                        <img className="is-background" src="https://source.unsplash.com/1600x900/?car" alt="" />
                    </div>
                    <div className='carousel-item has-background'>
                        <img className="is-background" src="https://source.unsplash.com/1600x900/?forest" alt="" />
                    </div>
                    <div className='carousel-item has-background'>
                        <img className="is-background" src="https://source.unsplash.com/1600x900/?road" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth ">
                <div className="container">
                    <ul >
                        <li className="is-active"><a>Overview</a></li>
                        <li><a className="has-text-white onHover">About</a></li>
                        <li><a className="has-text-white onHover">Jobs</a></li>
                        <li><a className="has-text-white onHover">Blogs</a></li>
                        <li><a className="has-text-white onHover">Privacy</a></li>
                        <li><a className="has-text-white onHover">Terms</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
)

export default MainSection;