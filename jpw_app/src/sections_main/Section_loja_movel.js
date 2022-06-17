import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'

export default class Section_loja_movel extends Component {
    render() {
        return (
            <div class="container">
                <h1>NOVIDADE - LOJA MÓVEL</h1>
                <h2>(LEVANDO AOS NOSSOS CLIENTES UM ATENDIMENTO PERSONALIZADO)</h2>
                <div class="caixa col-12">
                    <img src="../../img/locali.png" class="col-6"/>
                    <p class="col-6">texto loja movel</p>
                </div>
            </div>
        );
    }
}