import React, {Component} from 'react'
import './Stylingflowers.css'

class Followusflowers extends Component {
    render()
    {
        return (
            <div class="follow-us-section pt-5 pb-5" id="followUsSection">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="follow-us-section-heading">Follow Us</h1>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-row justify-content-center">
                            <div class="follow-us-icon-container">
                                <i class="fab fa-twitter icon"></i>
                            </div>
                            <div class="follow-us-icon-container">
                                <i class="fab fa-instagram icon"></i>
                            </div>
                            <div class="follow-us-icon-container">
                                <i class="fab fa-facebook icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Followusflowers;