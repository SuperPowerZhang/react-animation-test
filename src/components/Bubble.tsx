import React,{ useState } from 'react';
import imageUrl from '../assets/ani1.png';
import './bubble.css'

type PropType = {
  imageUrl:string
}

function Bubble(props:PropType){
  return (
    <li>
    <div className="img-wrapper">
      <div className='img-ani' />
      <img className= "img" src={props.imageUrl} alt="role-picture"  />
    </div>
  </li>
  )
}

export default Bubble;