import React from "react";
import { PlantContext } from "../PlantContext";


function PlantsCounter () {
    const { totalPlants }= React.useContext(PlantContext)
    return (
        <h2> hay {totalPlants} plantas</h2>
    );
}

export { PlantsCounter };