const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

// ------------------- Función que SETTEA------------

export const setUser = (username) => {
  currentUser.name = username;
};

// ------------------- Función que GET---------------

export const getUser = () => {
  return currentUser;
};
