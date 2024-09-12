import React, { useState } from "react";
import { Link } from "react-router-dom";

function Registrarse() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => {
    setShowModal1(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const openModal2 = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };


  return (
    <div className="container vh-100 m-0 d-flex row justify-content-center align-items-center">
      <div className="mx-auto d-flex row justify-content-center align-items-center">
        <div className="col mx-auto">
          <h5>Registro de usuario</h5>
          <button className="btn btn-primary" onClick={openModal1}>
            Click Aqui
          </button>
        </div>
        {showModal1 && (
          <div
            className="modal fade show d-block"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel">
                    Formulario de usuario
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal1}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h5>Complete la siguiente informacion:</h5>
                  <input
                    type="nombre"
                    class="form-control m-2"
                    id="exampleFormControlInput1"
                    placeholder="Nombres"
                  />
                  <input
                    type="apellido"
                    class="form-control m-2"
                    id="exampleFormControlInput1"
                    placeholder="Apellidos"
                  />
                  <p>Fecha de nacimiento:</p>
                  <input
                    type="date"
                    class="form-control m-2"
                    id="exampleFormControlInput1"
                  />
                  <div className="row">
                    <div className="col">
                      <select
                        class="form-select m-2"
                        aria-label="Default select example"
                      >
                        <option selected>documento</option>
                        <option value="1">Tarjeta de identidad</option>
                        <option value="2">Cedula de ciudadania</option>
                        <option value="3">Pasaporte</option>
                      </select>
                      </div>
                      <div className="col">
                        <input
                          type=""
                          class="form-control m-2"
                          id="exampleFormControlInput1"
                          placeholder=""
                        />
                    </div>
                  </div>
                  <input
                    type="email"
                    class="form-control m-2"
                    id="exampleFormControlInput1"
                    placeholder="Correo electronico"
                  />
                  <input
                    type="password"
                    class="form-control m-2"
                    id="exampleFormControlInput1"
                    placeholder="Contraseña"
                  />
                  <input
                    type="password"
                    class="form-control m-2"
                    id="exampleFormControlInput1"
                    placeholder="Confirmar constraseña"
                  />
                  <label>
                    <input 
                    type="checkbox"
                    class="form-check-input m-1"/>
                    Aceptar 
                    <Link to="" className="m-1" style={{textDecoration: "none"}}>
                    politicas y privacidad
                    </Link>
                  </label>
                  
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      closeModal1();
                    }}
                  >
                    Completar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col align-items-center">
          <h4>Registro de empresa</h4>
          <button className="btn btn-primary" onClick={openModal2}>
            Click Aqui
          </button>
        </div>
        {showModal2 && (
          <div
            className="modal fade show d-block"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    formulario de empresa
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal2}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Hide this modal and show the first with the button below.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      closeModal2();
                    }}
                  >
                    Completar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Registrarse;
