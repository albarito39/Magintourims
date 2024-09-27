import React from "react";
import "../styles/main.css";

function Informacion(props) {
  return (
    <div
      className="modal fade show d-block ver_mas"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex="-1"
      style={{ display: "block" }}
    >
      <div className="m-3 p-5 d-block vh-100 card_informacion">
        <div className="">
          <button onClick={props.close}>close</button>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ab
          laborum? Delectus, hic repellat vitae voluptas, corporis facilis
          mollitia ullam adipisci necessitatibus natus consequuntur laudantium
          saepe voluptatem labore inventore rem?
        </div>
      </div>
    </div>
  );
}

export default Informacion;
