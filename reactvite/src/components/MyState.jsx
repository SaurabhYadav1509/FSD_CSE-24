import React from 'react'
import { useState } from 'react'
function MyState() {
  const [counter, setCounter] = useState(10);

  function incrementCounter(){
  setCounter(counter+10);
  }

    function decrementCounter(){
  setCounter(counter-5);
  }

  return (
    <div>
      <button onClick={decrementCounter}>
      Decrement
      </button>
      <h2>counter={counter}</h2>
      <button onClick={incrementCounter}>
      increment
      </button>      
    </div>
  )
}

export default MyState