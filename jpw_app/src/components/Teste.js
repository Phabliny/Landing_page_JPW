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

  useEffect(() => {
    setClientes([]);
  }, [submitted]);

  return (
    <>
      {submitted && clientes.length === 0 && (
        <>
          <button onClick={buscarClientes} className="botao mx-2 mb-3" style={{ width: "200px" }}>
            Buscar clientes
          </button>
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
