import React from "react";
import { useState } from "react";

//import { BottomNavigation } from './components/BottomNavigation';
//import { CheckPlantButton } from './components/CheckPlantButton';

// import { CreatePlantButton } from "./components/CreatePlantButton";
// import { PlantItem } from "./components/PlantItem";
// import { PlantList } from "./components/PlantList";

import "./App.css";
import { BottomNavigationMUI } from "./components/BottomNavigationMUI";
import { Favorite } from "./components/Favorite";
import { Home } from "./components/Home";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      {value === "Home" && <Home /> }
      {value === "Favorite" && <Favorite />}
      <BottomNavigationMUI
        handleOnChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
}

export default App;
