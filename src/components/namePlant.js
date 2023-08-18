import React, { useState} from "react";

const NamePlant = () =>{
    const [plantName, setPlantName] = useState('');

    const handleNameChange = (event) => {
        setPlantName(event.target.value);
    };
   
    
    return (
        <div className='PlantName'>
          
          <input
            type="text"
            placeholder="Nombre de planta"
            value={plantName}
            onChange={handleNameChange}
          />
        </div>
    );
};

export default NamePlant;