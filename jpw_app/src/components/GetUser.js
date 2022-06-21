import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints";
import { Link } from "react-router-dom";

const GetUser = () => {
    const { name } = useParams();
    const { senha } = useParams();

    const usuario = {
        nome: "",
        senha: ""
    }

    const [user, setUser] = useState({});
    const [message, setMessage] = useState("");
  
    const getUser = (name, senha) => {
      api
        .get(name)
        .then((response) => {
          setUser(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    useEffect(() => {
      getUser(name);
    }, [name]);
  


};

export default GetUser;