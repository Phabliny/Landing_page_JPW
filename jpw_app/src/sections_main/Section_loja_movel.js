import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'

export default class Section_loja_movel extends Component {
    render() {
        return (
            <div class="fundo_loja_movel">
                <div class="container py-sm-1 py-md-3 py-lg-5">
                    <div class="row justify-content-center align-items-center py-5">
                        <h1>NOVIDADE - LOJA MÓVEL</h1>
                        <h2>(LEVANDO AOS NOSSOS CLIENTES UM ATENDIMENTO PERSONALIZADO)</h2>
                        <div class="d-flex flex-row justify-content-center align-items-center flex-wrap col-lg-10 mt-3 col-8">
                            <img src="../../img/loja_movel.png" class="col-sm-12 col-md-9 col-lg-6" />
                            <p class="text-justify col-lg-4">A JWP Ferragens irá contar, em breve, com um novidade que irá trazer ainda mais comodidade aos nossos clientes. Uma gama de opções de itens nos seguimentos de marceria, ..., irá até você...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}