import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from '@mui/icons-material/Add';

/*import { useState } from "react";*/
import "./BottomNavigationMUI.css";
// import Home from "@mui/icons-material/Home";

export const BottomNavigationMUI = ({handleOnChange}) => {

  return (

    
    <BottomNavigation 
      sx = {{
        background: 'white',

        boxShadow : '0 15px 25px rgba(0, 0, 0, 0.1)',
        
        position: 'fixed', bottom: 0, left: 0, right: 0,
      

        margin : '10px',

        marginBot : '20px',
        
        textAlign :'left',        
      }}
      
      showLabels

      onChange={(event, newValue) => {
        handleOnChange(newValue);
      }}
    >
      <BottomNavigationAction
        sx ={{
          ":hover": {
            border: "1px solid #33ECFF",
            color: 'gray',
          },
        }}
        label="Mis Plantas"
        icon={<HomeIcon />}
        value={"Home"}
      /> 
      <BottomNavigationAction
        sx ={{
          ":hover": {
            border: "1px solid #33ECFF",
            color: 'gray',
          },
        }}

        label="Agregar "
        icon={<AddIcon />}
        value={"AddIcon"}
      />
    </BottomNavigation>
  );
};
