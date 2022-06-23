import React, { useState } from "react";
import * as api from "../services/Endpoints";
import '../css/login.css'

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
            <div className="Auth-form-container">
              <div className="Auth-form">
                <div className="Auth-form-content form-signin">
                  <img src="../../img/logo_JPW.png" width="200px" className="mx-5"/>
                  <h3 className="Auth-form-title">Faça o Login</h3>
                  <div className="form-group mt-3">
                    <label>Usuário</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Digite o nome do usuário"
                      id="nome" 
                      required value={user.nome} onChange={trataCampo} 
                      name="nome" 
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Senha</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Digite a sua senha"
                      id="senha" 
                      required value={user.senha} 
                      onChange={trataCampo} 
                      name="senha"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button onClick={logar} className="btn btn-warning">
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
              )}
            </div>
  ); 
};

export default Login;
