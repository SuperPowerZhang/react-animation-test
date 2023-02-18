import React,{ useState } from 'react';
import BubbleWrapper from './components/BubbleWrapper';
import './App.css';
import './init.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BubbleWrapper />
    </div>
  )
}

export default App
