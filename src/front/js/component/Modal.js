import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modal({ mostrar, cerrar }) {
  return (
    <Modal mostrar={mostrar} onHide={cerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Ingrese sus Datos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Menu">
          <div className="d-flex ">
            <div className="d-flex flex-column">
              <label>Ingrese Nombre:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="d-flex flex-column">
              <label>Ingrese Apellido</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingresa tu Apellido"
              />
            </div>
          </div>
          <div className="correo">
            <label>Ingrese Correo</label>
            <div className="input-group mb-1">
              <span className="input-group-text">@</span>
              <input
                className="form-control"
                type="text"
                placeholder="Correo"
              />
            </div>
          </div>
          <div>
            <label>Ingrese Nueva Contraseña</label>
            <div className="input-group mb-1">
              <span className="input-group-text">*</span>
              <input
                className="form-control"
                type="text"
                placeholder="Nueva Contraseña"
              />
            </div>
            <label>Confirme Nueva Contraseña</label>
            <div className="input-group mb-1">
              <span className="input-group-text">*</span>
              <input
                className="form-control"
                type="text"
                placeholder="Nueva Contraseña"
              />
            </div>
            <div>
              <Button variant="primary" onClick={cerrar}>
                Validar
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cerrar}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={cerrar}>
          Enviar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal;
