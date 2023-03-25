import React from "react";
import { useState } from "react";
import { Container } from "@mui/material"

import "./App.css";
import { BottomNavigationMUI } from "./components/BottomNavigationMUI";
import { AddIcon } from "./components/AddIcon";
import { Home } from "./components/Home";

import { PlantList } from "./components/PlantList.js";
import { PlantItem } from "./components/PlantItem.js";

import { Router } from "@reach/router";







const plants=[
  {text:'cebolla', completed:false},
  {text:'cebolla', completed:false},
  {text:'cebolla', completed:false},
];

function App() {

  const [value, setValue] = useState("");
  return (
    <>
    <Container
      sx = {{
        background: 'whitesmoke',
        width : '100vw',
        borderRadius :'16px',
        marginTop : '16px',
        marginBottom : '20px',
        display : 'flex',
        flexDirection: 'column' ,
      }}>

        <PlantList>
        {plants.map(plant => (
          <PlantItem
          sx = {{

          }}
            key={plant.text}
            text={plant.text}
            completed={plant.completed}
          />
        ))}
       </PlantList>

      {value === "Home" && <Home />}
      {value === "Agregar" && <AddIcon />}

          





      <BottomNavigationMUI
        handleOnChange={(newValue) => {
          setValue(newValue);
        }}
      />

    </Container>

    </>
  );
}

export default App;
