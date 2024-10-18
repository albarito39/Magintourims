import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import imagecard from '../images/muralla china.jpg';
import Informacion from './informacion';
import Calificacion from './calificacion';


export default function ActionAreaCard() {
  const [showModal1, setShowModal1] = useState(false);

  const handleClick = () =>{
    setShowModal1(true)
  }
  const closeModal1 = () => {
    setShowModal1(false);
  };
  return (
    <div className="">
      <Card  onClick={handleClick} sx={{ maxWidth: 500, padding:'30px' }}>
      <CardActionArea>
        <CardMedia
          classes={{padding:'50px'}}
          component="img"
          
          image={imagecard}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Muralla China
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Calificacion/>
        </CardContent>
      </CardActionArea>
    </Card>
    {showModal1 && (
     
        <Informacion close={closeModal1}/>
      
      )}
    </div>
    
  );
}
