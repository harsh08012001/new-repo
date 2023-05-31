import React, {Component} from 'react'
import './Stylingflowers.css'

class Delinpayflowers extends Component {
    render()
    {
        return (
            <div class="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5 order-1 order-md-2">
                        <div class="text-center">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" class="delivery-and-payment-section-img" />
                        </div>
                    </div>
                    <div class="col-12 col-md-7 order-2 order-md-1">
                        <h1 class="delivery-and-payment-section-heading">
                            Delivery and Payment
                        </h1>
                        <p class="delivery-and-payment-section-description">
                            Enjoy hassle-free payment with the plenitude of payment options
                            available for you. Get live tracking and locate your food on a
                            live map. It's quite a sight to see your food arrive to your door.
                            Plus, you get a 5% discount on every order every time you pay
                            online.
                        </p>
                        <button class="banner-section-menu-button">Order Now</button>
                        <div class="mt-3">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png" class="payment-card-img" />
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png" class="payment-card-img" />
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" class="payment-card-img" />
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png" class="payment-card-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Delinpayflowers;