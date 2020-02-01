import React from 'react';
import SunFlowerCard from './SunFlowerCard';

const SunflowerList=({sunFlowers})=>{
    return(
        <div>
            {
                sunFlowers.map((user,i)=>{
                    return(
                        <SunFlowerCard
                        flower={sunFlowers[i].flower}
                        location={sunFlowers[i].location}
                        size={sunFlowers[i].size}
                    />
                    );
                    
                })
            }

        </div>
    )
}
export default SunflowerList;