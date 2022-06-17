import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080/jpw",
  headers: {
    "Content-type": "application/json",
  }
});

export const getAll = () => {
  return httpClient.get("/cliente");
};

export const get = (id) => {
  return httpClient.get(`/cliente/${id}`);
};

export const create = (data) => {
  return httpClient.post("/cliente", data);
};