import React,{ useState } from 'react';
import Bubble from './Bubble';

function BubbleWrapper(){
  return(
    <ul className='bubble-wrapper'>
        <Bubble />
        <Bubble />
    </ul>
  )
}

export default BubbleWrapper;