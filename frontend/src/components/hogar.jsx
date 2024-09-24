import React, { useState } from "react";
import muralla from "../images/muralla china.jpg";
import "../styles/main.css"
import { Link } from "react-router-dom";
import Informacion from "./informacion";

function Home() {
  const [showModal1, setShowModal1] = useState(false);
  
  const openModal1 = () => {
    setShowModal1(true);
  };

  return (
  
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 text-center p-2">
          <img src={muralla} className="w-100"  alt="muralla china" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"> Tour por la Muralla China</h5>
            <p className="card-text">
            Visita guiada por toda la muralla china incluye
            Alimentación y alojamiento.....
            </p>
            <div className="d-flex justify-content-end">
              <Link className="text-right"
            style={{textDecoration: "none"}}
            onClick={openModal1}>
            ver mas
            </Link>
            {showModal1 && (
              <Informacion/>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
