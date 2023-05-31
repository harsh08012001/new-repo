import React, {Component} from 'react'
import './Stylingflowers.css'

class Bannerflowers extends Component {
    render()
    {
        return (
            <div className="coffe-banner-section-bg-container d-flex flex-column justify-content-center">
            <div className="text-center">
                <h1 className="banner-section-heading mb-3">We care for your important moments.</h1>
                <p className="banner-section-paragraph mb-4">Wedding-Aniversary-Birthday-Proposals</p>
                <button className="banner-section-menu-button">View Here</button>
                <button className="banner-section-order-button">Order Now</button>
            </div>
        </div>
        );
    }
}

export default Bannerflowers;