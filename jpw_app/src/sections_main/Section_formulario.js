import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'
import { Button } from 'reactstrap';

export default class Section_formulario extends Component {
    render() {
        return (
            <div class="container">
                <h1>POSSO TE AJUDAR?</h1>
                <h2>(ENTRE EM CONTATO CONOSCO PARA FAZERMOS UM ORÇAMENTO)</h2>
                    <form>
                        <input type="text" placeholder="Nome"/>
                        <input type="telephone" placeholder="Telefone"/>
                        <input type="button" class="botao" value="Enviar"></input>
                    </form>
            </div>
        );
    }
}