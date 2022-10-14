import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
export const Demo = () => {
  const navigate = useNavigate();

  const { store, actions } = useContext(Context);

  const enviar = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    let usuario = data.get("usuario");

    let clave = data.get("clave");

    let traer = {
      usuario: usuario,
      clave: clave,
    };

    let response = await actions.login(traer);

    let mostrar = await actions.Cargar("Users");

    if (response.ok) {
      navigate("/admin");
      response = await response.json();
      mostrar = await mostrar.json();
      console.log(response);
      console.log(mostrar);
    } else {
      alert("error");
    }
  };

  const Prueba = async () => {
    let response = await actions.tokenvalidar("Bienvenido");
    console.log(await response.json);
  };

  return (
    <form className="row g-3" onSubmit={(e) => enviar(e)}>
      <div className=" w-100  d-flex  align-items-center justify-content-center flex-wrap pt-10">
        <div className="p-5 col-auto justify-content-center ">
          <label htmlFor=" staticEmail2" className=" visually-hidden ">
            USUARIO
          </label>
          <input
            type="string"
            className=" form-control border border-light "
            name="usuario"
            placeholder="Ingrese Usuario"
          />

          <br></br>
          <label htmlFor="inputPassword2" className="visually-hidden ">
            CONTRASEÑA
          </label>
          <input
            type="string"
            className="form-control border border-light"
            name="clave"
            placeholder="Ingrese Contraseña"
          />
        </div>

        <div className="col-auto">
          <Link to="/admin">
            <button type="submit" className="btn-outline-primary btn-sm">
              ADMINISTRADOR
            </button>
          </Link>
          <Link to="/teacher">
            <button type="submit" className="btn-outline-primary btn-sm">
              PROFESOR
            </button>
          </Link>
          <Link to="/student">
            <button type="submit" className="btn-outline-primary btn-sm">
              ESTUDIANTE
            </button>
          </Link>

          <br></br>
          <br></br>
          <Link to="/">
            <span className="navbar-brand mb-0 h1 text-ligh btn-sm ">
              {""}
              Olvidó su contraseña?
            </span>
          </Link>

          <br />
          <br />
          <button
            className="btn btn-primary align-items-left btn-sm"
            type="submit"
            onClick={() => Prueba}
          >
            Ingresar
          </button>
        </div>
      </div>
    </form>
  );
};
