import React from "react";
import { useState } from "react";
import { Container } from "@mui/material"

import "./App.css";
import { BottomNavigationMUI } from "../BottomNavigation";

import { PlantList } from "../PlantList/index.js";
import { PlantItem } from "../PlantItem/index.js";

import { PlantsCounter } from "../PlantsCounter";

const plantsDefault = [
  {text:'uchuva'},
  {text:'cebolla'},
  {text:'naranja'},
];

function App() {
  // const [plants, setPlants] = React.useState(plantsDefault);

  const localStoragePlants = localStorage.getItem('PLANTS_V1');
  let parsedPlants;

  if(!localStoragePlants) {
    localStorage.setItem('PLANTS_V1', JSON.stringify([]));
    parsedPlants = [];
  }else {
    parsedPlants = JSON.parse(localStoragePlants);
  }
  const [plants, setPlants] = React.useState(parsedPlants);
  const totalPlants = plants.length;


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
            {parsedPlants.map(plant => (
              <PlantItem
                key={plant.text}
                text={plant.text}
              />
            ))}
       </PlantList>

       <PlantsCounter
        total={totalPlants}
      />

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
