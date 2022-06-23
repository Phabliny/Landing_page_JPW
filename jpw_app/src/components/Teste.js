import { useEffect, useState } from "react";
import * as api from "../services/Endpoints";

const Teste = ({ submitted }) => {
  const [clientes, setClientes] = useState([]);

  const buscarClientes = () => {
    api.getAll().then((resp) => {
      console.log(resp);
      setClientes(resp.data);
    });
  };

  const logout = () => {
    console.log("saindo ....")
    localStorage.removeItem("jwtToken");
    submitted(false);
  };

  const baixarExcel = () => {
    api.exportExcel().then((resp) => {
      console.log(resp);
    });
  }

  useEffect(() => {
    setClientes([]);
  }, [submitted]);

  return (
    <>
    <button onClick={buscarClientes} className="botao mx-2 mb-3" style={{ width: "200px" }}>
            Buscar clientes
          </button>
          <button onClick={logout} className="botao mx-2">
            Sair
          </button>
          <button onClick={baixarExcel} className="botao mx-2" style={{ width: "200px" }}>
            Baixar o arquivo Excel
          </button>
      {submitted && clientes.length === 0 && (
        <>
        </>
      )}
      {submitted && (
        <ol>
          {clientes.map((cliente) => (
            <li>
              {cliente.nome} - {cliente.localDateTime}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Teste;