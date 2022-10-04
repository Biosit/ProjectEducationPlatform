import React from "react";
import "../../styles/home.css";

import { Cardt } from "../component/cardt";

export const Teacher = () => {
  return (
    <div className=" container-fluid row-12 p-5 btn-group">
      <nav clasName="navbar">
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
            <a className="dropdown-item" href="#">
              REGISTRAR
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              LEER
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              BORRAR
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              ACTUALIZAR
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </nav>
      <card className="col-3 d-flex flex-wrap ">
        <Cardt />
      </card>
    </div>
  );
};
