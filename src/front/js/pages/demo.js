import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  
  const enviar = (carga) => {
    carga.preventDefault;
  };
  return (
    <form className="row g-3" onSubmit={enviar}>
      <div className=" w-100  d-flex  align-items-center justify-content-center flex-wrap pt-10">
        <div className="p-5 col-auto justify-content-center ">
          <label for=" staticEmail2" className=" visually-hidden ">
            USUARIO
          </label>
          <input
            type=" text "
            readonly
            className=" form-control border border-light "
            id="staticEmail2 "
            value="Ingrese Usuario"
          />

          <br></br>
          <label for="inputPassword2" className="visually-hidden ">
            CONTRASEÑA
          </label>
          <input
            type="password"
            className="form-control border border-light"
            id="inputPassword2"
            placeholder="Ingrese Contraseña"
          />
        </div>
		

        <div className="col-auto">
		<Link to="/">
		  <button			
            type="submit"
            className="bg-info btn btn-primary btn-lg">
         INGRESAR
          </button>
		  </Link>
          <br></br>
          <br></br>
          <Link to="/modal">
            <span className="navbar-brand mb-0 h1 text-ligh ">
              {" "}
              Olvidó su contraseña?
            </span>
          </Link>


		  <br /> 
      <br />
      <Link to="/">
        <button className="btn btn-primary align-items-left">REGRESAR</button>
      </Link>

        </div>
      </div>
    </form>
  );
};
