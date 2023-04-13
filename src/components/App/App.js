import React from "react";
import { AppUI } from "./AppUI";
import { PlantProvider } from "../PlantContext";
// import "./App.css";


// const plantsDefault = [
//   {text:'uchuva '},
//   {text:'cebolla'},
//   {text:'naranja'},
//   {text:'aaaa'},
//   {text:'diosmio'},


// ];


function App() {

  return (
    <PlantProvider>
      <AppUI/>
    </PlantProvider>
  );
}

export default App;
