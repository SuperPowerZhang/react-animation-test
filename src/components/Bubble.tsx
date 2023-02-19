import React,{ MouseEventHandler, useState } from 'react';
import './bubble.css'

type PropType = {
  imageUrl:string,
  imageOrder:number,
  isActive:boolean,
  setActiveImg:(arg:number)=> MouseEventHandler<HTMLLIElement> | undefined
}

function Bubble(props:PropType){
  const {isActive, imageOrder,imageUrl,setActiveImg} =props;
  return (
    <li onClick={()=>setActiveImg(imageOrder)}>
    <div className="img-wrapper">
      <div className={isActive?'img-ani':''} />
      <img className= "img" src={imageUrl} alt="role-picture"  />
    </div>
  </li>
  )
}

export default Bubble;