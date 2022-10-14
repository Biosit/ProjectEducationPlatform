import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

import { Card } from "../component/card";

export const Admin = () => {
  return (
    <div className=" container-fluid row-12 p-5 btn-group">
      <nav clasName="navbar">
        <button
          type="button"
          className="col-auto btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          PROFESORES
        </button>

        <ul className="dropdown-menu">

        <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

        <Link to="/registro">
          <li>
            <a className="dropdown-item" href="#">
              <b>CREAR</b>
            </a>
          </li>
          </Link>

          <Link to="/consulta">
          <li>
            <a className="dropdown-item" href="#">
              <b>CONSULTAR</b>
            </a>
          </li>
          </Link>

          <Link to="/registro">
          <li>
            <a className="dropdown-item" href="#">
              <b>BORRAR</b>
            </a>
          </li>
          </Link>

          <Link to="/registro">
          <li>
            <a className="dropdown-item" href="#">
              <b>ACTUALIZAR</b>
            </a>
          </li>
          </Link>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          
        </ul>

        <button
          type="button"
          className="col-auto btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ESTUDIANTES
        </button>

        
        <ul className="dropdown-menu">

        <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>
        <Link to="/registro">
          <li>
            <a className="dropdown-item" href="#">
              <b>CREAR</b>
            </a>
            </li>
            </Link>

            <Link to="/consulta">
          <li>
            <a className="dropdown-item" href="#">
              <b>CONSULTAR</b>
            </a>
          </li>
          </Link>

          <Link to="/registro">
          <li>
            <a className="dropdown-item" href="#">
              <b>BORRAR</b>
            </a>
          </li>
          </Link>

          <Link to="/registro">
          <li>
            <a className="dropdown-item" href="#">
              <b>ACTUALIZAR</b>
            </a>
          </li>
          </Link>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>


          
        </ul>
      </nav>
      <card className="
       d-flex flex-wrap ">
        <Card />
      </card>
    </div>
  );
};
