'use client'
import React from 'react'
import MegaBoost from './Megaboost';

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleMegaBoost = () => {
    setCount((currentValue) => currentValue + 1234);
  };

  return (
    <div id="main">
      Count: {count}
      <button
        className='single-increment-btn'
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </div>
  )
}


export default App;