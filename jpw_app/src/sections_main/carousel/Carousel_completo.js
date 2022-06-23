import React, { Component } from 'react';
import Carousel_generico from './Carousel_generico';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Carousel_completo extends Component {
    render() {
        return (
            <div className="col-7">
                <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} 
                stopOnHover={true} showArrows={true} transitionTime={1500}>
                <div className="item">
                    <Carousel_generico id="0"/>
                </div>
                <div className="item">
                    <Carousel_generico id="1"/>
                </div>
                <div className="item">
                    <Carousel_generico id="2"/>
                </div>
                <div className="item">
                    <Carousel_generico id="3"/>
                </div>
                </Carousel>
            </div>
        );
    }
}

export default Carousel_completo;