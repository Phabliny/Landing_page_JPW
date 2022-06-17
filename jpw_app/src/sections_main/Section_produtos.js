import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'
import Slidshow from '../componente_footer/slidshow'

export default class Section2 extends Component {
    render() {
        return (
            <div class="container py-5">
                <h1>NOSSOS PRODUTOS</h1>
                <h2>(TEMOS UMA VARIEDADE GRANDE DE OUTROS PRODUTOS)</h2>
                <div class="d-flex flex-row justify-content-center align-items-center flex-wrap col-lg-10 mt-3">
                <Slidshow/>
                </div>
            </div>
        );
    }
}