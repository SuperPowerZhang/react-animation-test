import React,{ useState } from 'react';
import Bubble from './Bubble';
import {IMAGE_SRC} from '../constants/IMAGE_SRC'

function BubbleWrapper(){
  const name = 'ani1'
  return(
    <ul className='bubble-wrapper'>
      {IMAGE_SRC.map(src=>{
         const imageUrl = new URL(`../assets/ani${src}.png`, import.meta.url).href
         return  <Bubble imageUrl={imageUrl}  key={src}/>
      })}
       
    </ul>
  )
}

export default BubbleWrapper;