import React from 'react';

const SunFlowerCard =({flower,size,location})=>{
    return(
        <div>
            <h1>{flower}</h1>
            <h3>{location}</h3>
            <p>{size}</p>
        </div>
    )
}
export default SunFlowerCard;