import React, { useState } from "react";
import * as api from "../services/Endpoints";

const NovoCliente = () => {
  const estadoInicialCliente = {
    id: null,
    nome: "",
    telefone: "",
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
      telefone: cliente.telefone,
    };
    console.log(data);
    api
      .create(data)
      .then((response) => {
        setCliente({
          id: response.data.id,
          nome: response.data.nome,
          telefone: response.data.telefone,
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
          <div className="form-group">
            <label htmlFor="nome">nome</label>
            <input type="text" className="form-control" id="nome" required value={cliente.nome} onChange={trataCampo} name="nome" />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="telefone">Telefone</label>
            <input type="text" className="form-control" id="telefone" required value={cliente.telefone} onChange={trataCampo} name="telefone" />
          </div>

          <button onClick={enviarCliente} className="btn btn-success mt-4">
            Cadastrar
          </button>
        </div>
      )}
    </div>
  );
};

export default NovoCliente;
