import React from "react";
import muralla_china from "../images/muralla china.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "@mui/material";
function Reserva() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col d-flex">
          <ArrowBackIcon className="mx-3" style={{ color: "aqua" }} />
          <div className="col">
            <h4 style={{ color: "aqua" }} className="">
              Solicitud de reserva
            </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="img-fluid col">
          {" "}
          <img
            src={muralla_china}
            style={{ maxHeight: "140px", maxWidth: "140px" }}
            alt=""
          />
        </div>
        <div className="col">
          <p style={{ color: "gray" }} className="m-1">
            Tipo de viaje: Tour
          </p>
          <h4>Muralla China</h4>
        </div>
        <hr className="mt-2" style={{ border: "solid 4px" }} />
      </div>

      <div className="row d-flex">
        <h4 className="p-2">Tu viaje:</h4>
        <div className="col">
          <h6 className="m-0">Fecha</h6>
          <p style={{ color: "gray", display: "inline" }}>10-15 de Sep</p>
        </div>
        <div className="col text-end">
          <Link
            className="col"
            style={{
              textDecoration: "none",
              display: "inline",
            }}
          >
            Editar
          </Link>
        </div>
      </div>
      <div className="row mt-2">
        <h6 className="m-0">Personas</h6>

        <div className="col">
          <p style={{ color: "gray", display: "inline" }}>1 Persona</p>
        </div>
        <div className="col text-end">
          <Link
            className="col align-content-end"
            style={{
              textDecoration: "none",
              display: "inline",
            }}
          >
            Editar
          </Link>
        </div>
        <hr className="mt-2" style={{ border: "solid 4px" }} />
      </div>

      <h4 className="">Detalles del precio:</h4>
      <div className="row">
        <div className="col">
          <p style={{ color: "gray" }}>Tour Operador</p>
        </div>
        <div className="col text-end">
          <p
            style={{
              color: "gray",
            }}
          >
            $130 USD
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{ color: "gray", display: "inline" }}>Tarifa de entrada</p>
        </div>
        <div className="col text-end">
          {" "}
          <p
            style={{
              color: "gray",
            }}
          >
            $6.20 USD
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{ color: "gray", display: "inline" }}>
            Tarifa por servicio de magic tourims
          </p>
        </div>
        <div className="col text-end">
          <p style={{ color: "gray", display: "inline", marginLeft: "51px" }}>
            $70.03 USD
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{ color: "gray", display: "inline" }}>
            Tarifa de hospedaje
          </p>
        </div>
        <div className="col text-end">
          <p
            style={{
              color: "gray",
            }}
          >
            $35.50 USD
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{ color: "gray", display: "inline" }}>Tarifa de comida</p>
        </div>
        <div className="col text-end">
          <p
            style={{
              color: "gray",
            }}
          >
            $74.5 USD
          </p>
        </div>
        <hr className="mt-2" style={{ border: "solid 2px" }} />
      </div>

      <div className="row">
        <div className="col">
          <h6>Total(USD)</h6>
        </div>
        <div className="col text-end">
          <h6>$316.23</h6>
        </div>
        <Link
          className="align-content-end"
          style={{
            textDecoration: "none",
          }}
        >
          Mas información
        </Link>
        <hr className="mt-2" style={{ border: "solid 4px" }} />
      </div>
      <div className="text-center">
        <button type="button" class="btn btn-primary mb-2">
          Registrate
        </button>
      </div>
    </div>
  );
}

export default Reserva;
