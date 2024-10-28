import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Informacion from "./informacion";
import Calificacion from "./calificacion";
import sitios from "./bd.json";

export default function ActionAreaCard(props) {
  const [showModal1, setShowModal1] = useState(false);
  const [selected, setSelected] = useState({})
  console.log(sitios);
  const handleClick = (sitio) => {
    setSelected(sitio)
    setShowModal1(true);
  };
  const closeModal1 = () => {
    setShowModal1(false);
  };
  return (
    <div>
      {sitios.sitios.map((sitio) => (
        <>
          
          <Card onClick={() => handleClick(sitio)} sx={{ maxWidth: 500, padding: "30px" }}>
            <CardActionArea>
              <CardMedia
                classes={{ padding: "50px" }}
                component="img"
                image={sitio.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {sitio.lugar}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {sitio.descripcion}
                </Typography>
                <Calificacion />
              </CardContent>
            </CardActionArea>
          </Card>
          
        </>
      ))}
      {selected && showModal1 && <Informacion detalles={selected} close={closeModal1} />}
    </div>
  );
}
