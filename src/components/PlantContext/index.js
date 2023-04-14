import React from 'react';
import { useLocalStorage } from './uselocalStorage';

const PlantContext = React.createContext();

function PlantProvider (props) {

    const {
        item: plants,
        saveItem: savePlants,
        loading,
        error,
      } = useLocalStorage('PLANTS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      
      const [imageSrc, setImageSrc] = React.useState("");
      
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
      const addPlant = (text) => {
        const newPlants = [...plants];
        newPlants.push({
          text,
        });
        savePlants(newPlants);
      };

      const deletePlant = (text) => {
        const plantsIndex = plants.findIndex(plant => plant.text === text);
        const newPlants = [...plants];
        newPlants.splice(plantsIndex, 1);
        savePlants(newPlants);
      };
    return (

    <PlantContext.Provider value={{
        loading,
        error,
        totalPlants,
        searchedPlants,
        setSearchValue,
        deletePlant,
        addPlant,
        setOpenModal,
        openModal,
        imageSrc,
        setImageSrc,
    }}>
        {props.children}
    </PlantContext.Provider>
    );
}

export { PlantContext, PlantProvider };