import React, { Component } from 'react';
import elementos from '../json/elementos.json'

export default class Elemento_generico extends Component {
    constructor(props){
        super(props);
        this.state = elementos
    }
    render() {
        return (
            <div class="elemento_footer">
                    <img src={this.state.elementos[this.props.id].img} width="30px"/>
                    <div class="na_coluna">
                    <h5>{this.state.elementos[this.props.id].titulo}</h5>
                    <p>{this.state.elementos[this.props.id].paragrafo}</p>  
                </div>
            </div>
        );
    }
}