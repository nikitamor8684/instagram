import React from 'react';
import { useEffect,useState } from 'react';
import Expl from'../Explore.json';

function Explore(){
    const [exploredata,setexploredata]= useState([]);
    useEffect(() =>{
        
    })
    return(
        <>
        <div className='explore-page'>
<h1>Explore</h1>
<div className='image-grid'>
    {
        Expl.map((image,index)=>{
            return(
<div className='image-container'>
    <img  src={image.postImage} alt={`Image ${index}`} />
     </div>
            );
        })
    }
</div>
        </div>
        </>
    )
}
export default Explore;