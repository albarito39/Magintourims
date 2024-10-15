import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BedIcon from '@mui/icons-material/Bed';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FaceIcon from '@mui/icons-material/Face';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Homents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Homents"
        value="Homents"
        icon={<HomeIcon />}
      />
      
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={ <FaceIcon />}
      />
      <BottomNavigationAction 
      label="Home" 
      value="Home" 
      icon={<BedIcon />} />
    </BottomNavigation>
  );
}
