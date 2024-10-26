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
        <h4 className="p-2 mt-2">Metodo de pago</h4>
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
            style={{ maxHeight: "40px", maxWidth: "40px" }}
            alt=""
          />
        </div>
        <div className="p-1">
          <img
            src="https://w7.pngwing.com/pngs/382/146/png-transparent-american-express-logo-icons-logos-emojis-iconic-brands-thumbnail.png"
            style={{ maxHeight: "70px", maxWidth: "70px" }}
            alt=""
          />
        </div>
        <div className="p-1">
          <img
            src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png"
            style={{ maxHeight: "40px", maxWidth: "40px" }}
            alt=""
          />
        </div>
        <div className="p-1">
          <img
            src="https://logodix.com/logo/719192.png"
            style={{ maxHeight: "70px", maxWidth: "70px" }}
            alt=""
          />
        </div>
        <div className="p-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72gTuVQZwiljYARzPAOrXtl-z2Xs-MVMUCQ&s"
            style={{ maxHeight: "60px", maxWidth: "60px" }}
            alt=""
          />
        </div>
        <div className="p-1">
          <img
            src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-pay-payment-software-vector-png-image_12256718.png"
            style={{ maxHeight: "50px", maxWidth: "50px" }}
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <hr className="mt-2 mb-2" style={{ border: "solid 4px" }} />
      </div>
      <div className="row d-flex">
        <h4 className="p-2 mt-2">Requisitos de tu viaje</h4>
        <div className="col">
          <h6 className="m-0">Numero de telefónico</h6>
          <p style={{ color: "gray", fontSize: "14px" }}>
            Agrega y confirma tu número de telefono para recibir actualizaciónes
            del viaje
          </p>
        </div>
        <div className="col text-end">
          <button type="button" class="btn btn-primary mt-4">
            agregar
          </button>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col">
          <h6 className="m-0">Foto de perfil</h6>
          <p style={{ color: "gray", fontSize: "14px" }}>
            Los anfitriones deben de saber quien se hospeda o viaja con ellos
          </p>
        </div>
        <div className="col text-end">
          <button type="button" class="btn btn-primary mt-4">
            agregar
          </button>
        </div>
      </div>
      <div className="row">
        <hr className="mt-2 mb-2" style={{ border: "solid 4px" }} />
      </div>
      <div className="row d-flex">
        <h4 className="p-2 mt-1">Política de cancelación</h4>
        <div className="col">
          <p style={{ color: "gray" }}>
            Esta politica cumple con un tiempo acordado que son (10) dias de reembolso completo de su dinero si usted cancela despues de esa fecha. Se dara un Reembolso parcial del 65% de su dinero
          </p>
        </div>
      </div>
      <div className="row">
        <hr className="mt-2 mb-2" style={{ border: "solid 3px" }} />
      </div>
      <div className="text-center mt-2 mb-2">
        <button type="button" class="btn btn-primary mb-2">
          Confirmar y pagar
        </button>
      </div>
    </div>
  );
}

export default requisitos;
