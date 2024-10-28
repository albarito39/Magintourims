import React from "react";
import "../styles/main.css";
import Carusel from "./carusel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";

function Informacion(props) {
  const { detalles } = props;
  return (
    <div
      className="modal fade show d-block ver_mas"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex="-1"
      style={{ display: "block" }}
    >
      <div className="m-3 p-4 d-block card_informacion">
        <div className="">
          <ChevronLeftIcon style={{ color: "aqua" }} onClick={props.close}>
            close
          </ChevronLeftIcon>
        </div>
        <Carusel />
        <div className="m-4">
          <h5 style={{ color: "aqua" }}>Descripción</h5>
          {detalles.descripcion}
        </div>
        <div className="m-4">
          <h5 style={{ color: "aqua" }}>Localización</h5>
          <div
            id="map-container-google-1"
            className="z-deph-1-half map-container m-0"
            style={{ height: "60vh" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.756660099525!2d116.56853626857786!3d40.43220368665215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d7687f2ccf%3A0xd040259b950522df!2sMuralla%20China!5e0!3m2!1ses-419!2sco!4v1727809300007!5m2!1ses-419!2sco"
              width="100%"
              height="80%"
              style={{ borderRadius: "15px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="location"
            ></iframe>
          </div>
          <div className="p-2">
            <h5 style={{ color: "aqua" }}>Precio total:</h5>
            <h4>$316,23 USD</h4>
          </div>
          <Button
            variant="contained"
            color="success"
            style={{ width: "240px", backgroundColor: "aqua" }}
            className=" text-center"
          >
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Informacion;
