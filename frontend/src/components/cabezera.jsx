import * as React from 'react';
import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HomeIcon from '@mui/icons-material/Home';
import ReservaIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';
import '../styles/cabezera.css'


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Homents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="fixed-bottom  ">
      <BottomNavigation value={value} onChange={handleChange}>
       
          <BottomNavigationAction
            label="Homents"
            value="Homents"
            icon={<HomeIcon />}
            
          />
        
  

          <BottomNavigationAction
            label="Reserva"
            value="Reserva"
            icon={<ReservaIcon />}
            onClick={handleChange}
          />
     

 
          <BottomNavigationAction
            label="map"
            value="map"
            icon={<MapIcon />}
          />
       

          <BottomNavigationAction
            label="perfil"
            value="perfil"
            icon={<FaceRetouchingNaturalIcon />} />

      </BottomNavigation>


    </div>
  );
}
