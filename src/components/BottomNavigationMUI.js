import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from '@mui/icons-material/Add';

import { useState } from "react";
import "./BottomNavigationMUI.css";
// import Home from "@mui/icons-material/Home";

export const BottomNavigationMUI = ({handleOnChange}) => {

  return (

    
    <BottomNavigation 
      sx = {{
        background: 'white',
       
       
        marginBot : '20px',
        display : 'flex',
        flexDirection: 'line' ,
        aligItems : ' left',
        
      }}
      showLabels
      onChange={(event, newValue) => {
        handleOnChange(newValue);
      }}
    >
      <BottomNavigationAction
        label="Mis Plantas"
        icon={<HomeIcon />}
        value={"Home"}
      /> 
      <BottomNavigationAction
        label="Agregar "
        icon={<AddIcon />}
        value={"AddIcon"}
      />
    </BottomNavigation>
  );
};
