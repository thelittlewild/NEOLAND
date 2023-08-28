import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
//useForm nos permite gestionar la data de forma más sencilla
import "./Register.css";
import { registerUser } from "../services/API_user/user.service";
import useErrorRegister from "../hooks/useErrorRegister";

const Register = () => {
  //? -----ESTADO DE LA PÁGINA: res, send(loading), estado que da el ok de la funcionalidad-------
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [ok, setOk] = useState(false);

  //destructuring de useForm:
  const { handleSubmit, register } = useForm();

  //? -----FUNCIONES QUE GESTIONAN LA DATA DEL FORMULARIO---

  //hacemos la llamada asíncrona:
  // puede llamarse como nosotros queramos en lugar de "formData", en este caso son los datos que nos recoge el register, nos crea un objeto
  const formSubmit = async (formData) => {
    //vamos a darle un género porque es requerido
    const customFormData = {
      ...formData,
      gender: "mujer",
      rol: "user",
    };
    //gestionamos los datos con una llamada asíncrona:
    setSend(true);
    setRes(await registerUser(customFormData));
    setSend(false);
    //primero gestiono la respuesta, cuando la tengo dejo de cargar
  };

  //? -----GESTIÓN DEL OK O ERRORES DE LA RESPUESTA

  useEffect(() => {
    // Si es un 200 es un res.status y res.data directamente
    //si es un error 404, 500, 409... se accede desde las res.response.data res.response.status
    useErrorRegister(res, setOk, setRes);
  }, [res]);

  //? --------ESTADOS DE NAVEGACIÓN O OK -> condicionales que lo gestionen

  if (ok) {
    console.log("te has registrado");
  }

  return (
    <>
      <div className="form-wrap">
        {console.log(res)}
        <h1>Sign Up</h1>
        <p>It’s free and only takes a minute.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>
          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
          </div>

          <div className="btn_container">
            {console.log(send)}
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              {send ? "Cargando ...." : "Register"}
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </small>
          </p>
        </form>
      </div>
      <footer>
        <p>
          Already have an account? <a href="#">Login Here</a>
        </p>
      </footer>
    </>
  );
};

export default Register;
