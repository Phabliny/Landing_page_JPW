import React, { useEffect, useState } from "react";
import * as api from "../services/Endpoints";
import "../css/style.css";

const Login = ({ submitted, setSubmitted }) => {
  const estadoInicial = {
    nome: "",
    senha: "",
  };
  const [user, setUser] = useState(estadoInicial);
  const [erro, setErro] = useState("");
  
  const trataCampo = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    console.log("useEffect (" + localStorage.getItem("jwtToken")+")");
    if (localStorage.getItem("jwtToken") !== null) setSubmitted(true);
    else setSubmitted(false);
  }, []);

  const logar = () => {
    console.log(user);
    api
      .login(user)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
        localStorage.setItem("jwtToken", response.data);
      })
      .catch((e) => {
        console.log("Erro: -------------------------- " + e);
        setErro("Usuário e/ou senha errado(s)");
      });
  };

  const logout = () => {
    console.log("saindo ....")
    localStorage.removeItem("jwtToken");
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div className="m-3">
          <h4 className="d-inline">Usuário logado!</h4>
          <button onClick={logout} className="botao mx-2">
            Sair
          </button>
        </div>
      ) : (
        <div className="d-flex flex-row justify-content-center align-items-center flex-wrap m-3">
          {erro !== "" ? (
            <div className="alert alert-primary">
              <p>{erro}</p>
            </div>
          ) : (
            <p>Faça login para acessar o relatório</p>
          )}
          <input
            type="text"
            className="border-0 border-bottom mx-3"
            id="nome"
            required
            value={user.nome}
            onChange={trataCampo}
            name="nome"
            placeholder="Nome"
          />
          <input
            type="password"
            className="border-0 border-bottom  mx-2"
            id="senha"
            required
            value={user.senha}
            onChange={trataCampo}
            name="senha"
            placeholder="Senha"
          />
          <button onClick={logar} className="botao mx-2">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
