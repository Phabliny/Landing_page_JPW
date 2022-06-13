import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'

export default class Section3 extends Component {
    render() {
        return (
            <div class="container">
                <h1>PRINCIPAIS MARCAS</h1>
                <h2>(TRABALHAMOS COM AS MELHORES MARCAS DO MERCADO)</h2>
                <div class="marcas">
                        <img src="../../img/logo_power.png" class="imagem_marca col-dg-2"/>
                        <img src="../../img/logo_kisafix.jpeg" class="imagem_marca col-dg-2"/>
                        <img src="../../img/logo_orbi.png" class="imagem_marca col-dg-2"/>
                        <img src="../../img/logo_alltape.png" class="imagem_marca col-dg-2"/>
                        <img src="../../img/logo_new-fix.jpeg" class="imagem_marca col-dg-2"/>
                        <img src="../../img/logo_ciser.png" class="imagem_marca col-dg-2"/>
                        <img src="../../img/logo_jo-marcas.png" class="imagem_marca col-dg-2"/>
                        <img src="../../img/logo_3m.png" class="imagem_marca col-dg-2"/>
                </div>
            </div>
        );
    }
}