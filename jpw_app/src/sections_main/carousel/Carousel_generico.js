import React, { Component } from 'react';
import carousel from '../../json/carousel.json'

export default class Carousel_generico extends Component {
    constructor(props){
        super(props);
        this.state = carousel
    }
    render() {
        return (
            <div className="">
                    <div>
                    <img src={this.state.carousel[this.props.id].img}/>
                    </div>
            </div>
        );
    }
}
