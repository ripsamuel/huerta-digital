import React from 'react';
import { PlantContext } from '../PlantContext';
// import './PlantSearch.css';

function PlantSearch() {
  const { searchValue, setSearchValue } = React.useContext(PlantContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="PlantSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { PlantSearch };