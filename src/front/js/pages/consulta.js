import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Consulta = () => {
  const { store, actions } = useContext(Context);

  const enviar = (carga) => {
    carga.preventDefault;
  };
  return (
    <div class="container">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">USUARIO</th>
            <th scope="col">CORREO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <Link to="/admin">
        <button className="btn btn-danger align-items-left btn-sm">
          REGRESAR
        </button>
      </Link>
    </div>
  );
};
