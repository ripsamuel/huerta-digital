import React from "react";
import ReactDOM from 'react-dom';

import "./PlantForm.css";

function PlantForm({ setOpenModal, addPlant, imageSrc, setImageSrc ,searchedPlants, setOpenModalChecked}) {
 
  const [newPlantValue, setNewPlantValue] = React.useState("");



  const onChange = (event) => {
    setNewPlantValue(event.target.value);
    

  };

  const onCancel = () => {
    setOpenModal(false);
  };


  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setImageSrc(event.target.result);

    };

    reader.readAsDataURL(file);
  }

const onSubmit = (event) => {
  let valueExists = false;
  searchedPlants.forEach((plant) => {
    if (newPlantValue === plant.text) {
      event.preventDefault();
      valueExists = true;
    alert("Please enter a diferent plant name");
    }
  });
  if (!valueExists) {
    addPlant(newPlantValue, imageSrc);
    setOpenModal(false);
    setOpenModalChecked(true);
    

  }
}
  //ORIGINAL
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //     addPlant(newPlantValue, imageSrc);
  //     setOpenModal(false);
  // };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>NombrePlanta</legend>
        <input
          value={newPlantValue}
          onChange={onChange}
          placeholder="Nombre planta"
        />

        <div className="img-container">
         <input type="file" onChange={handleFileSelect} />
          {imageSrc && <img src={imageSrc} alt="imagen renderizada" />}
        </div>

        <button type="submit" className="AddPlant">
          Agregar / Actualizar planta
        </button>
        <div>
          <button type="button" onClick={onCancel}>
            cancelar
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export { PlantForm };
