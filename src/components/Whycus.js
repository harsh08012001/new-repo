import React, {Component} from 'react'
import './Stylingflowers.css'

class Whycus extends Component {
    render()
    {
        return (
            <div className="wcu-section pt-5 pb-5" id="wcuSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="wcu-section-heading">Why Choose Us?</h1>
                        <p className="wcu-section-description">
                        We have the perfect floral arrangements to brighten someone’s day.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://res.cloudinary.com/djvdeuqj1/image/upload/v1675776183/Online_Shoping_29_vtpzay.jpg" className="wcu-card-image" />
                            <h1 className="wcu-card-heading mt-3">
                                Home Delivery
                            </h1>
                            <p className="wcu-card-description">
                            We have vast collection of flower bouquet in various flower types.
                                All our orders are carefully packed and arranged to
                                give you the nothing less than perfect.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://res.cloudinary.com/djvdeuqj1/image/upload/v1678207469/top-view-roses-flowers_phsduu.jpg" className="wcu-card-image" />
                            <h1 className="wcu-card-heading mt-3">
                            Freshness Guaranteed
                            </h1>
                            <p className="wcu-card-description">
                            Whether it be for the holidays, a birthday or just because, getting flowers is a nice idea.
                            Trust your blossoming love to our flower professionals.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://res.cloudinary.com/djvdeuqj1/image/upload/v1675777078/16284_xzzhcj.jpg" className="wcu-card-image-offers" />
                            <h1 className="wcu-card-heading mt-3">
                                Best Offers
                            </h1>
                            <p className="wcu-card-description">
                                Offer Coupons & Offers upto <span className="offers">50% OFF</span> and Exclusive Promo
                                Codes on All Online Orders and We offer a wide variety of gorgeous flowers in every color.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}

export default Whycus;