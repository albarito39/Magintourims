import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import imagecard from '../images/muralla china.jpg';
// import Informacion from './informacion';
import Calificacion from './calificacion';


export default function Hogar(props) {
  //const [showModal1, setShowModal1] = useState(false);

  //   const handleClick = () =>{
  //     setShowModal1(true)
  //   }
  //   const closeModal1 = () => {
  //     setShowModal1(false);
  //   };
  const {
    sitio
  } = props
  return (
    <div className="">
      <Card sx={{ maxWidth: 500, padding: '30px' }}>
        <CardActionArea>
          <CardMedia
            classes={{ padding: '50px' }}
            component="img"

            image={sitio.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {sitio.pais}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {sitio.descripcion}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {sitio.precio}
            </Typography>
            <Calificacion />
          </CardContent>
        </CardActionArea>
      </Card>
      {/* {showModal1 && (
     
        <Informacion close={closeModal1}/>
      
      )} */}
    </div>

  );
}
