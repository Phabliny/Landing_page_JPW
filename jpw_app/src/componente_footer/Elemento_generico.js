import React, { Component } from 'react';
import elementos from '../json/elementos.json'

export default class Elemento_generico extends Component {
    constructor(props){
        super(props);
        this.state = elementos
    }
    render() {
        return (
            <div>
                <img src={this.state.elementos[this.props.id].img} width="30px"/>
                <h2>{this.state.elementos[this.props.id].titulo}</h2>
                <p>{this.state.elementos[this.props.id].paragrafo}</p>  
            </div>
        );
    }
}