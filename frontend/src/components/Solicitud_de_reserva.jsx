import React from "react";
import muralla_china from "../images/muralla china.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "@mui/material";
function Reserva() {
  return (
    <div className="row">
      <div className="col d-flex">
        <ArrowBackIcon className="mx-3" style={{ color: "aqua" }} />
        <h4 style={{ color: "aqua" }} className="">
          Solicitud de reserva
        </h4>
      </div>
      <div className="row flex m-2">
        <div className="img-fluid col">
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
      </div>
      <hr className="m-1" style={{ border: "solid 4px" }} />
      <div className="row m-0">
        <h4 className="p-2">Tu viaje:</h4>
        <div className="col">
          <h6 className="m-0">Fecha</h6>
          <div className="">
            <p>10-15 de Sep</p>
            <Link className="col align-content-end">asdaea</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserva;
