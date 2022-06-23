import React, { Component } from "react";
import "../css/style.css";
import "../css/ourstrap.css";

export default class Section_empresa extends Component {
  render() {
    return (
      <div className="container py-sm-1 py-md-3 py-lg-5">
        <div className="row justify-content-center align-items-center py-4">
          <h1>SOBRE A EMPRESA</h1>
          <h2>(CONHEÇA A NOSSA EMPRESA)</h2>
          <div className="d-flex flex-row justify-content-center align-items-center flex-wrap py-sm-1 col-lg-10 mt-3 col-10">
            <img className="col-sm-8 col-md-6 col-lg-3 col-6 foto_wellington" src="../../img/foto.jpeg" alt="" />
            <div className="col-lg-8 mx-3 px-2 my-3">
              <p className="text-justify">
                Somos um empresa localizada na cidade de Uberlândia (MG) com foco na venda de produtos para os seguintes seguimentos:{" "}
                <span className="negrito">marcenaria</span>, <span className="negrito">marmoraria</span>, <span className="negrito">serralheria</span> e{" "}
                <span className="negrito">vidraçaria.</span>
              </p>
              <p className="text-justify">
                <span className="negrito">Wellington Oliveira</span> é fundador da JPW Ferragens e natural da cidade de Uberlândia (MG). Sua
                experiência no ramo iniciou-se no ano de 1997. Segundo ele, no ano de 2011 decidiu realizar um grande sonho, criar a marca JPW
                Ferragens. Segundo Wellington, a marca foi idealizada para dar continuidade a um trabalho que já vinha sendo realizado com sucesso e
                que consistia na construção de uma base de clientes satisfeitos, a partir da entrega de produtos com qualidade e rapidez!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
