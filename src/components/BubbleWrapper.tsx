import React,{ useState } from 'react';
import Bubble from './Bubble';
import {IMAGE_SRC} from '../constants/IMAGE_SRC'

function BubbleWrapper(){
  const [activeImg, setActiveImg] =useState(0);

  return(
    <ul className='bubble-wrapper' >
      {IMAGE_SRC.map(order=>{
         const imageUrl = new URL(`../assets/ani${order}.png`, import.meta.url).href
         return  <Bubble 
         imageUrl={imageUrl} 
         imageOrder = {order}
         key={order} 
         isActive = {activeImg===order}
         setActiveImg={setActiveImg}
         />
      })}
       
    </ul>
  )
}

export default BubbleWrapper;