import axios from "axios";

const APIheaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

//creamos estancia de axios

export const APIUser = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  headers: APIheaders,
  timeout: 60000,
  // le ponemos mucho tiempo para probar, normalmente tenemos que ponerle lo menos posible
});
