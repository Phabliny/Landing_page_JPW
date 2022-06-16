import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'

export default class Section3 extends Component {
    render() {
        return (
            <div class="container py-5">
                <div class="row justify-content-center align-items-center py-4">
                    <h1>PRINCIPAIS MARCAS</h1>
                    <h2>(TRABALHAMOS COM AS MELHORES MARCAS DO MERCADO)</h2>
                    <div class="marcas d-flex flex-row justify-content-center align-items-center flex-wrap col-lg-10 mt-3">
                            <img src="../../img/logo_power.png" class="img_marca"/>
                            <img src="../../img/logo_kisafix.jpeg" class="img_marca"/>
                            <img src="../../img/logo_new-fix.jpeg" class="img_marca"/>
                            <img src="../../img/logo_ciser.png" class="img_marca"/>
                            <img src="../../img/logo_orbi.png" class="img_marca"/>
                            <img src="../../img/logo_alltape.png" class="img_marca"/>
                            <img src="../../img/logo_jo-marcas.png" class="img_marca"/>
                            <img src="../../img/logo_3m.png" class="img_marca"/>
                    </div>
                </div>
            </div>
        );
    }
}