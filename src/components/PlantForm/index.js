import React from "react";
import "./PlantForm.css";

function PlantForm({ setOpenModal, addPlant, imageSrc, setImageSrc}) {
 
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
    event.preventDefault();
    addPlant(newPlantValue, imageSrc);
    setOpenModal(false);
  };


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
