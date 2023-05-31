import React from 'react';
import "./style.css";
import {link} from 'react-router-dom';
const Home = () => {
    return (
        <div className='home-bg-container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
            
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                <a class="nav-link active" href="#" id = "navItem1">Why Choose Us? <span class="sr-only">(current)</span></a>
                <a class="nav-link" href="#" id = "navItem2">Explore Menu</a>
                <a class="nav-link" href="#" id = "navItem3">Delivery & Payment</a>
                <a class="nav-link" href="#" id = "navItem4">Follow Us</a>
                </div>
            </div>
            </nav>
        </div>
    )

}

export default Home