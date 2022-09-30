import React, { Component } from "react";

export const Formulary = () => (
  <div
    className="container  border-top border-primary "
    style="max-width: 500px"
    id="contenedor-formulario"
  >
    <div className="text-center mb-4" id="titulo-formulario">
      <div>
        <img src="./img/portada.jpg" alt="" className="img-fluid ps-5" />
      </div>
      <h2>WELCOME</h2>
      <p className="fs-5">"4-SCHOOL.."</p>
    </div>

    <div className="mb-3">
      <button type="submit" className=" btn btn-primary w-100 fs-5">
        LOGIN
      </button>
    </div>

    <form method="POST" data-netlify="true" action="#">
      <div className="mb-3">
        <input
          type="user"
          className="form-control"
          id="email"
          name="email"
          placeholder="Please insert your user ID"
        />
      </div>

      <div className="mb-3">
        <input
          type="input"
          className="form-control"
          id="name"
          name="name"
          placeholder="Please insert your Password"
        />
      </div>

      <div className="mb-3">
        <button type="submit" className=" btn btn-primary w-100 fs-5">
          LOGIN
        </button>
      </div>
    </form>
  </div>
);
