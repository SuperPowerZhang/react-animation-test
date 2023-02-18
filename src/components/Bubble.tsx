import React,{ useState } from 'react';
import imageUrl from '../assets/ani1.png';
import './bubble.css'


function Bubble(){
  return (
    <div className="img-wrapper">
      <img className= "img" src={imageUrl} alt="role-picture"  />
    </div>
  )
}

export default Bubble;