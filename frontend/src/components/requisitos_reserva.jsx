import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function requisitos() {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex">
          <ArrowBackIcon className="mx-2" style={{ color: "aqua" }} />
          <div className="col">
            <h4 style={{ color: "aqua" }} className="">
              Requisitos y Metodo de pago
            </h4>
          </div>
        </div>
        <hr className="mb-0" style={{ border: "solid 2px" }} />
      </div>
      <div className="row d-flex">
        <h4 className="p-3">Metodo de pago</h4>
        <div className="col">
          <h6 className="m-0">Metodos de pagos autorizados</h6>
        </div>
        <div className="col text-end">
          <button type="button" class="btn btn-primary mb-2">
            agregar
          </button>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="p-1">
          <img
            src="https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.jpg"
            style={{ maxHeight: "60px", maxWidth: "60px" }}
            alt=""
          />
        </div>
        <div className="p-1">
          <img
            src="https://w7.pngwing.com/pngs/382/146/png-transparent-american-express-logo-icons-logos-emojis-iconic-brands-thumbnail.png"
            style={{ maxHeight: "90px", maxWidth: "90px" }}
            alt=""
          />
        </div>
        <div className="p-1">
          <img
            src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png"
            style={{ maxHeight: "60px", maxWidth: "60px" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default requisitos;
