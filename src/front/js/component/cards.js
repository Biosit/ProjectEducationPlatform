import React from "react";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div className="card" style={{ width: "8 rem" }}>
      <img
        src="https://e7.pngegg.com/pngimages/768/360/png-clipart-academic-degree-master-s-degree-bachelor-s-degree-teacher-education-teacher-logo-graduation-ceremony.png"
        className="card-img-top perfil"
        alt="..."
      />
      <div className=" card-body justify-content-center  ">
        <h5 className="card-title justify-content-center "><b>BIENVENIDO</b></h5>
        <p className="card-text justify-content-center ">ESTUDIANTE</p>
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
