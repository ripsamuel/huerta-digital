import React from "react";
import { useState } from "react";
import { AppUI } from "./AppUI";

import "./App.css";


const plantsDefault = [
  {text:'uchuva '},
  {text:'cebolla'},
  {text:'naranja'},
  {text:'aaaa'},
  {text:'diosmio'},


];


function useLocalStorage (itemName , initialValue ) {
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if(!localStorageItem) {
        localStorage.setItem('itemName', JSON.stringify(initialValue));
        parsedItem = [];
        console.log('estoy true')

      }else {
        parsedItem = JSON.parse(localStorageItem);
        console.log('estoy else')
      }
      setItem(parsedItem);
      setLoading(false);

    }, 2000);
  })


  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);

  }
  return {
    item,
    saveItem,
    loading,
  };
}

function App() {
  const {
    item: plants,
    saveItem: savePlants, 
    loading,
  } = useLocalStorage('PLANTS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  let searchedPlants = [];

  const totalPlants = plants.length;

  if (!searchValue.length >= 1) {
    searchedPlants = plants;
  } else {
    searchedPlants = plants.filter(plant => {
      const plantText = plant.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return plantText.includes(searchText);
    });
  }


  const deletePlant = (text) => {
    const plantsIndex = plants.findIndex(plant => plant.text === text);
    const newPlants = [...plants];
    console.log('plants es 1 -> ' + plants)
    console.log(newPlants)

    newPlants.splice(plantsIndex, 1);
    savePlants(newPlants);

    console.log('estoy en delete')
    console.log(newPlants)

  };

  return (

    <AppUI
    loading = {loading}
    totalPlants= {totalPlants}
    searchedPlants = {searchedPlants}
    setSearchValue={setSearchValue}
    deletePlant = {deletePlant}
    />
  );
}

export default App;
