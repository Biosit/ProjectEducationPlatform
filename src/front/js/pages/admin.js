import React from "react";
import "../../styles/home.css";

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
        <Card />
      </card>
    </div>
  );
};
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Admins = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
