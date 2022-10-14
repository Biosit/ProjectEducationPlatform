import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contrasena = () => {
  const { store, actions } = useContext(Context);

  const enviar = (carga) => {
    carga.preventDefault;
  };
  return (
    <div class="container">
    <form className="row col-md-8" onSubmit={enviar}>
      <div className=" d-flex  align-items-center justify-content-center flex-wrap pt-10">
        <div className="p-5 col-auto justify-content-center ">
          
          <br></br>
          <label for="inputPassword2" className="visually-hidden ">
            USUARIO
          </label>
          <input
            type="password"
            className="form-control border border-light"
            id="inputPassword2"
            placeholder="Ingrese Usuario"
          />

          <br></br>
          <label for="inputPassword2" className="visually-hidden ">
            INGRESE SU CONTRASEÑA
          </label>
          <input
            type="password"
            className="form-control border border-light"
            id="inputPassword2"
            placeholder="Ingrese Contraseña"
          />

          <br></br>
          <label for="inputPassword2" className="visually-hidden ">
            CONFIRME SU CONTRASEÑA
          </label>
          <input
            type="password"
            className="form-control border border-light"
            id="inputPassword2"
            placeholder="Confirmar Contraseña"
          />

          </div>

        

          <br></br>
          
          <Link to="/">
            <button className="btn btn-success align-items-left btn-sm ">
              {" "}
              GUARDAR CAMBIOS
            </button>
          </Link>

          <br />
          <br />

          
          <Link to="/admin">
            <button className="btn btn-danger align-items-left btn-sm">
              REGRESAR
            </button>
          </Link>
          
        </div>
      
    </form>
    </div>
  );
};