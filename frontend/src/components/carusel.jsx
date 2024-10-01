import React from "react";
import muralla_china_2 from "../images/muralla china 2.jpg"
import muralla_china_3 from "../images/muralla china 3.jpg"
import muralla_china_4 from "../images/muralla china 4.jpg"

function Carusel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide m-2"
      data-bs-ride="carousel"
      
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={muralla_china_2} style={{maxHeight:'180px'}} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={muralla_china_3} style={{maxHeight:'180px'}} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={muralla_china_4} style={{maxHeight:'180px'}} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carusel;
