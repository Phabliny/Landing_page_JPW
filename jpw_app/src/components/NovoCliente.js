import React, { useState } from "react";
import * as api from "../services/Endpoints";
import '../css/style.css'

const NovoCliente = () => {
  const estadoInicialCliente = {
    id: null,
    nome: "",
    telefone: ""
  };
  const [cliente, setCliente] = useState(estadoInicialCliente);
  const [submitted, setSubmitted] = useState(false);

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setCliente({ ...cliente, [name]: value });
  };

  const novo = () => {
    setCliente(estadoInicialCliente);
    setSubmitted(false);
  };

  const enviarCliente = () => {
    var data = {
      nome: cliente.nome,
      telefone: cliente.telefone
    };
    console.log(data);
    api
      .create(data)
      .then((response) => {
        setCliente({
          id: response.data.id,
          nome: response.data.nome,
          telefone: response.data.telefone,
          localDateTime: response.data.localDateTime
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>Cliente cadastrado com sucesso!</h4>
              <button className="btn btn-success" onClick={novo}>
                Novo
              </button>
            </div>
          ) : (
            <div>
              <input type="text" className="inline form-control border-0 border-bottom mb-3" id="nome" required value={cliente.nome} onChange={trataCampo} name="nome" placeholder="Nome"/>

              <input type="telephone" className="form-control border-0 border-bottom mb-3" id="telefone" required value={cliente.telefone} onChange={trataCampo} name="telefone" placeholder="Telefone"/>

              <button onClick={enviarCliente} className="botao">
                Enviar
              </button>
            </div>
          )}
        </div>
  );
};

export default NovoCliente;
