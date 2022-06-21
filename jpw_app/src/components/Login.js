import React, { useState } from "react";
import * as api from "../services/Endpoints";
import '../css/style.css'

const Login = () => {
  const estadoInicial = {
    nome: "",
    senha: ""
  };
  const [user, setUser] = useState(estadoInicial);
  const [submitted, setSubmitted] = useState(false);

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const logar = () => {
    console.log(user);
    api
      .login(user)
      .then((response) => {
        setUser(response.data)
        setSubmitted(true);
        console.log(response.data + "response.data --------------------------");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>Usuário logado!</h4>
            </div>
          ) : (
            <div class="d-flex flex-row justify-content-center align-items-center flex-wrap">
              <input type="text" className="border-0 border-bottom mx-3" id="nome" required value={user.nome} onChange={trataCampo} name="nome" placeholder="Nome"/>

              <input type="password" className="border-0 border-bottom  mx-2" id="senha" required value={user.senha} onChange={trataCampo} name="senha" placeholder="Senha"/>

              <button onClick={logar} className="botao mx-2">
                Enviar
              </button>
            </div>
          )}
        </div>
  ); 
};

export default Login;
