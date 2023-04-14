import React from "react";
import { Container } from "@mui/material"
import { BottomNavigationMUI } from "../BottomNavigation";
import { PlantList } from "../PlantList/index.js";
import { PlantItem } from "../PlantItem/index.js";
// import { PlantsCounter } from "../PlantsCounter";
import { PlantSearch } from '../PlantSearch';
import { PlantContext } from '../PlantContext';
import { Modal } from '../Modal';
import { PlantForm } from "../PlantForm";



function AppUI()  {
  const {
    error,
    loading,
    searchedPlants,
    deletePlant,
    openModal,
  } = React.useContext(PlantContext);
    return  (
    <>
    <Container
      sx = {{
        background: 'whitesmoke',
        borderRadius :'16px',
        marginTop : '16px',
        marginBottom : '20px',
        display : 'flex',
        flexDirection: 'column' ,
      }}>
        <PlantSearch/>

          <PlantList>
          {loading && <p> estamos carganda ...</p>}
          {error && <p> desesperate ...</p>}
          {(!loading && !searchedPlants.lenght) && <p> crea tu primera planta de la huerta </p>}

              {searchedPlants.map(plant => (
                <PlantItem
                  key={plant.text}
                  text={plant.text}
                  onDelete={() => deletePlant(plant.text)}
                />
              ))}
        </PlantList>

       {/* <PlantsCounter
        total={totalPlants}
      /> */}

      <BottomNavigationMUI />

    </Container>

    {openModal && (
    <Modal>
      <PlantForm>
        
      </PlantForm>
    </Modal>
    )}

    {/* <CreatePlantButton
      setOpenModal = {setOpenModal}
    /> */}

    </>
    );
}

export { AppUI };