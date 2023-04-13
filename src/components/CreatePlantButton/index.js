import React from 'react';
import './CreatePlantButton.css';

function CreatePlantButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  
  return (
    <button
      className="CreatePlantButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreatePlantButton };