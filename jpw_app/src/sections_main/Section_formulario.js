import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'
import NovoCliente from "../components/NovoCliente";

export default class Section_formulario extends Component {
    render() {
        return (
            <div class="container py-sm-1 py-md-3 py-lg-5">
                <div class="row justify-content-center align-items-center py-4">
                    <h1>POSSO TE AJUDAR?</h1>
                    <h2>(ENTRE EM CONTATO CONOSCO PARA FAZERMOS UM ORÇAMENTO)</h2>
                    <div class="col-lg-10 mt-3 d-flex flex-row justify-content-center align-items-center">
                       <NovoCliente />
                    </div>
                </div>
            </div>
        );
    }
}