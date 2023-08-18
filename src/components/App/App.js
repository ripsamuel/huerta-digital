import React from "react";

import { usePlants } from "./usePlants";
import { Container } from "@mui/material";
import { BottomNavigationMUI } from "../BottomNavigation";
import { PlantList } from "../PlantList/index.js";
import { PlantItem } from "../PlantItem/index.js";
import { PlantsCounter } from "../PlantsCounter";
// import { PlantSearch } from "../PlantSearch";
import { Modal } from "../Modal";
import { ModalAdd } from "../Modal/ModalAdd";
import { PlantForm } from "../PlantForm/index";
import { PlantHeader } from "../PlantHeader";
// import "./App.css";


// const plantsDefault = [
//   {text:'uchuva '},
//   {text:'cebolla'},
//   {text:'naranja'},
//   {text:'aaaa'},
//   {text:'diosmio'},


// ];


function App() {
  const { searchedPlants, deletePlant, openModal, totalPlants, 
    // searchValue, setSearchValue,
    setOpenModal, addPlant, imageSrc, setImageSrc, openModalChecked, setOpenModalChecked} = usePlants();

  return (
    <>
      <Container
        sx={{
          background: "whitesmoke",
          borderRadius: "16px",
          marginTop: "16px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PlantHeader>
          <PlantsCounter totalPlants={totalPlants} />

          {/* <PlantSearch searchValue={searchValue} setSearchValue={setSearchValue} /> */}
        </PlantHeader>

        <PlantList>
          {searchedPlants.map((plant) => (
            <PlantItem
              key={plant.text}
              text={plant.text}
              imageSrc={plant.imageSrc}
              onDelete={() => deletePlant(plant.text)}
              // plantUpdate={() = plantUpdate(plant.imageSrc)}
            />
          ))}
        </PlantList>

        <BottomNavigationMUI
        setOpenModal={setOpenModal}
        />
      </Container>
      {openModal && (
        <Modal>
          <PlantForm
          setOpenModal={setOpenModal}
          addPlant={addPlant}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          searchedPlants={searchedPlants}
          setOpenModalChecked={setOpenModalChecked}
          />
        </Modal>
      )}
      {openModalChecked && (
        <ModalAdd
        setOpenModalChecked={setOpenModalChecked}
        />
      )}
    </>
  );
}

export default App;
