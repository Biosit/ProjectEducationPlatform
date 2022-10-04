import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="card" style={{ width: "8 rem" }}>
      <img
        src="https://img2.freepng.es/20180420/wye/kisspng-system-administrator-network-administrator-logo-co-networking-vector-5ad989114d6239.967449601524205841317.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className=" card-body justify-content-center  ">
        <h5 className="card-title justify-content-center ">BIENVENIDO</h5>
        <p className="card-text justify-content-center ">ADMINISTRADOR</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">USUARIO</li>
        <li className="list-group-item">NOMBRE</li>
      </ul>
      <div className="card-body justify-content-center">
        <Link to="/Demo">
          <button className="btn btn-outline-warning align-items-center">
            CERRAR SESIÓN
          </button>
        </Link>
      </div>
    </div>
  );
};
