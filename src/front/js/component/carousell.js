import React, { Component } from "react";

export const Carousel = () => (
  <div id="carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src="../../img/graduate.jpeg" className="d-block w-100" alt="" />
      </div>

      <div className="carousel-item" data-bs-interval="2000">
        <img
          src="https://img.freepik.com/fotos-premium/e-learning-estudiantes-concepto-universitario_31965-2456.jpg?w=1380"
          className="d-block w-100"
          alt="..."
        />
      </div>

      <div className="carousel-item" data-bs-interval="2000">
        <img
          src="https://img.freepik.com/vector-gratis/resumen-casquillo-baja-graduacion-poligonal-mapa-modelo-planeta-tierra-globo-concepto-e-learning_127544-1106.jpg?w=1380&t=st=1664501075~exp=1664501675~hmac=250070199151bd8d18a62b51f6808388486a757023731b5682c39bd4a1c9ff56"
          className="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
