import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from '@mui/icons-material/Add';
import { PlantContext } from "../PlantContext";

/*import { useState } from "react";*/
// import "./BottomNavigationMUI.css";
// import Home from "@mui/icons-material/Home";

export const BottomNavigationMUI = () => {
  const {
    setOpenModal,
  } = React.useContext(PlantContext);

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  };

  
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
      style ={{zIndex : 10}}
      
    >
      <BottomNavigationAction id="btn-home" onClick={onClickButton}
        sx ={{
          ":hover": {
            color: 'blue',
          },
        }}
        label="Mis Plantas"
        icon={<HomeIcon />}
        value={"Home"}
       
      />
      <BottomNavigationAction id="btn_agregar" onClick={onClickButton}
        sx ={{
          ":hover": {
            color: 'blue',
          },
        }}

        label="Agregar "
        icon={<AddIcon />}
        value={"AddIcon"}
      />
    </BottomNavigation>
  );
};
