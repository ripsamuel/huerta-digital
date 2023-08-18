import React from "react";

import './PlantList.css'
function PlantList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}


export { PlantList };
