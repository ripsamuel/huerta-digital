import * as React from 'react';
import './navbar.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box 
      className = 'NavbarBottom' 
      sx={{ width: 272 }} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{ maxWidth: 50 }} label="" icon={<HomeIcon />} />
        <BottomNavigationAction sx={{ maxWidth: 50 }} label="" icon={<AddIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export {SimpleBottomNavigation}


