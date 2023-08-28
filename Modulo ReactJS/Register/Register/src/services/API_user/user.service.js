// Puntos de encuentro/entrada a nuestra aplicación

import { APIUser } from "./service.config";

//Aquí se va a gestionar la sincronía:
export const registerUser = async (formData) => {
  return APIUser.post("/users/register", formData)
    .then((res) => res)
    .catch((error) => error);
  //el return es implícito porque no hay llaves
};
