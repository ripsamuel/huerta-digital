import React from 'react';
import './PlantSearch.css';

function PlantSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="PlantSearch"
      placeholder="Busca una planta de la HUERTA"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { PlantSearch };