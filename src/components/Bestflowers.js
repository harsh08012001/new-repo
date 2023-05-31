import React, {Component} from 'react'
import './Stylingflowers.css'

class Bestflowers extends Component {
    render()
    {
        return (
            <div class="healthy-food-section pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <div class="text-center">
                            <img src="https://res.cloudinary.com/djvdeuqj1/image/upload/v1678208914/shutterstock_1426052075-scaled_qzyklk.jpg" class="healthy-food-section-img" />
                        </div>
                    </div>
                    <div class="col-12 col-md-7">
                        <h1 class="healthy-food-section-heading">
                            Fresh, Variety kind of Flowers Availaible
                        </h1>
                        <p class="healthy-food-section-description">
                        Love is the flower you’ve got to let grow.” – John Lennon “Life is the flower for which love is the honey.” – Victor Hugo “A flower cannot blossom without sunshine, and man cannot live without love.” – Max Muller “If I had a single flower for every time I think about you, I could walk forever in my garden.”
                        </p>
                        <button class="banner-section-menu-button">Watch Video</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Bestflowers;