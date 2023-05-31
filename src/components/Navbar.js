import React, {Component} from 'react'
import './Stylingflowers.css'
import { Link } from 'react-router-dom';
class Navbarflowers extends Component {
    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://res.cloudinary.com/djvdeuqj1/image/upload/v1678204116/Screenshot_185_ivt3wd.png" className="navbar-coffee-logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-link active" id="navitem1" href="#wcuSection">Why choose us? <span className="sr-only">(current)</span></a>
                    <a className="nav-link" id="navitem2" href="#saicart">Explore Flowers</a>
                    <a className="nav-link" id="navitem3" href="#deliveryPaymentSection">Delivery & Payment</a>
                   <Link to="/Signin"><p className="nav-link" id="navitem4" >Login</p></Link> 
                </div>
            </div>
        </div>
    </nav>
        );
    }
}

export default Navbarflowers;