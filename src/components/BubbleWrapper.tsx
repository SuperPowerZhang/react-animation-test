import React,{ useState } from 'react';
import Bubble from './Bubble';

function BubbleWrapper(){
  return(
    <ul className='bubble-wrapper'>
      <li>
        <Bubble />
      </li>
    </ul>
  )
}

export default BubbleWrapper;