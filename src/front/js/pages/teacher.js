import React from "react";
import "../../styles/home.css";

import { Cardt } from "../component/cardt";

export const Teacher = () => {
  return (
    <div className=" d-flex justify-content-between container-fluid row-12 p-5 btn-group">
      <nav clasName="navbar">
        <button
          type="button"
          className="col-auto btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b>ESTUDIANTES</b>
        </button>

        <ul className="dropdown-menu">

        <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="#">
              <b><u>REGISTRAR CALIFICACIONES</u></b>
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              <b><u>VER CALIFICACIONES </u></b>
            </a>
          </li>

          
          <li>
            <a className="dropdown-item" href="#"><b><u>ACTUALIZAR CALIFICACIONES</u></b>
              
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          
        </ul>
      </nav>
      <card className="col-3 d-flex flex-wrap ">
        <Cardt />
      </card>
    </div>
  );
};
