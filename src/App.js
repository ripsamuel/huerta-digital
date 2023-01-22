import React from "react";
import { useState } from "react";
import { Container } from "@mui/material"

//import { BottomNavigation } from './components/BottomNavigation';
//import { CheckPlantButton } from './components/CheckPlantButton';

// import { CreatePlantButton } from "./components/CreatePlantButton";
// import { PlantItem } from "./components/PlantItem";
// import { PlantList } from "./components/PlantList";

import "./App.css";
import { BottomNavigationMUI } from "./components/BottomNavigationMUI";
import { AddIcon } from "./components/AddIcon";
import { Home } from "./components/Home";

import { PlantList } from "./components/PlantList.js";
import { PlantItem } from "./components/PlantItem.js";




const plants=[
  {text:'cebolla', completed:false},
  
];

function App() {
  const [value, setValue] = useState("");

  return (
    <>

    <Container
      sx = {{
        background: 'whitesmoke',
        width : '100%',
        height : '600px',
        borderRadius :'16px', 
        marginTop : '40px',
        display : 'flex',
        flexDirection: 'column' ,
        aligItems : ' center',
      }}>

        
        <PlantList>
        {plants.map(plant => (
          <PlantItem
            key={plant.text}
            text={plant.text}
            completed={plant.completed}
          />
        ))}
       </PlantList>
       
    </Container>


     



      {value === "Home" && <Home />}
      {value === "Agregar" && <AddIcon />}
     
      <BottomNavigationMUI
        handleOnChange={(newValue) => {
          setValue(newValue);
        }}
      />



    </>
  );
}

export default App;
