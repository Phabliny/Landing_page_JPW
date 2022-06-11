import React, { Component } from 'react';
import '../css/style.css'
import '../css/ourstrap.css'

export default class Section1 extends Component {
    render() {
        return (
            <div class="container">
                <h1>SOBRE A EMPRESA</h1>
                <h2>(CONHEÇA A NOSSA EMPRESA)</h2>
                <div class="caixa">
                    <div class="foto_sobre">
                        <img src="../../img/foto.jpeg"/>
                    </div>
                    <div class="texto_sobre">
                        <p>Somos um empresa localizada na cidade de Uberlândia (MG) com foco na venda de  produtos para os seguintes seguimentos: marcenaria, marmoraria, serralheria e vidraçaria. </p>
                        <p>Wellington Oliveira é fundador da JPW Ferragens e natural da cidade de Uberlândia (MG). Sua experiência no ramo iniciou-se no ano de 1997. Segundo ele, no ano de 2011 decidiu realizar um grande sonho, criar a marca JPW Ferragens. Segundo Wellington, a marca foi idealizada para dar continuidade a um trabalho que já vinha sendo realizado com sucesso e que consistia na construção de uma base de clientes satisfeitos, a partir da entrega de produtos com qualidade e rapidez!</p>
                    </div>
                </div>
            </div>
        );
    }
}