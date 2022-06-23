import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'
import Carousel_completo from './carousel/Carousel_completo';

export default class Section_produtos extends Component {
    render() {
        return (
            <div className="fundo_produtos">
                <div className="container py-sm-1 py-md-3 py-lg-5">
                    <div className="row justify-content-center align-items-center py-5">
                        <h1>NOSSOS PRODUTOS</h1>
                        <h2>(TEMOS UMA VARIEDADE GRANDE DE OUTROS PRODUTOS)</h2>
                        <div className="d-flex flex-row justify-content-center align-items-center flex-wrap col-lg-10">
                            <Carousel_completo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}