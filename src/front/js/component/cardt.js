import React from "react";
import { Link } from "react-router-dom";

export const Cardt = () => {
  return (
    <div className="card" style={{ width: "8 rem" }}>
      <img
        src="https://img2.freepng.es/20180424/sce/kisspng-professor-computer-icons-education-school-professor-vector-5adfdb99b400b5.5337656915246201857373.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className=" card-body justify-content-center  ">
        <h5 className="card-title justify-content-center "><b>BIENVENIDO</b></h5>
        <p className="card-text justify-content-center ">PROFESOR JIRAFALES</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">USUARIO</li>
        <li className="list-group-item">NOMBRE</li>
      </ul>
      <div className="card-body justify-content-center">
        <Link to="/Demo">
          <button className="btn btn-outline-warning align-items-center">
            <u>CERRAR SESIÓN</u>
          </button>
        </Link>
      </div>
    </div>
  );
};
