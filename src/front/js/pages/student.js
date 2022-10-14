import React from "react";
import "../../styles/home.css";

import { Cards } from "../component/cards";

export const Student = () => {
  return (
    <div className=" container-fluid row-12 p-5 btn-group">
      <nav clasName="navbar">
        <button
          type="button"
          className="col-auto btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          CALIFICACIONES
        </button>

        <ul className="dropdown-menu">

        <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item" href="#"><b><u>
              REVISAR
              </u></b></a>
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
        <Cards />
      </card>
    </div>
  );
};
