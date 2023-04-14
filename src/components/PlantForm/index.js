import React from "react";
import { PlantContext } from "../PlantContext";
import "./PlantForm.css";

function PlantForm() {
  const [newPlantValue, setNewPlantValue] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");

  const { setOpenModal, addPlant } =
    React.useContext(PlantContext);

  const onChange = (event) => {
    setNewPlantValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addPlant(newPlantValue, imageSrc);
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

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>NombrePlanta</legend>
        <input
          value={newPlantValue}
          onChange={onChange}
          placeholder="Nombre planton"
        />

        <div className="img-container">
         <input type="file" onChange={handleFileSelect} />
          {imageSrc && <img src={imageSrc} alt="imagen renderizada" />}
        </div>

        <button type="submit" className="AddPlant">
          {" "}
          Agregar/ Actualizar planta
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
