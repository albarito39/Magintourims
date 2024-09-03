import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import imageLogo from "../images/Diseño sin título.png";
import { FcGoogle } from "react-icons/fc";

function inicio() {
  return (
    <div className="row m-0 d-flex vh-100 row justify-content-center align-items-center align-items-lg-end align-items-sm-start">
      <div className="row col-auto text-center">
        <img src={imageLogo} alt="" />
        <div className="m-0 d-flex row justify-content-center align-items-center">
          <input
            type="email"
            class="form-control m-2"
            id="exampleFormControlInput1"
            placeholder="Correo Electronico"
          />
          <input
            type="password"
            class="form-control m-2"
            id="exampleFormControlInput1"
            placeholder="Contraseña"
          />
          <button type="button" class="btn btn-primary m-2">
            Iniciar Sesión
          </button>
          <button type="button" class="btn btn-primary m-2">
            Registrate
          </button>
          <Link class="m-2">Olvidaste tu contraseña?</Link>
          <div className="col-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            color="blue"
            fill="currentColor"
            className="bi bi-facebook m-1"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
          <FcGoogle style={{width:"30px", height: "30px"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default inicio;
