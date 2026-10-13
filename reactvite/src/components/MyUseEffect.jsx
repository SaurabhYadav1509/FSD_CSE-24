import React, { useEffect, useState } from 'react'

function MyUseEffect() {

    const[counter, setCounter] = useState(0);
    const[pointer, setPointer] = useState(100);

    function increaeCounter(){
        setCounter(counter + 1);
    }
    
    function decreasePointer(){
        setPointer(pointer-5);
    }

    useEffect(() => {
        // console.log("hi using useEffect");
        console.log("Counter = " + counter);
        console.log("Pointer = " + pointer);
    },[counter, pointer])

  return (
    <div>MyUseEffect
    <h2>Counter App</h2>
    <h1 style={{color: 'blue'}}> Counter Value = {counter}</h1>
    <h1 style={{color: 'green'}}> Pointer Value = {pointer}</h1>

    <button onClick={increaeCounter}>Counter</button>
    <button onClick={decreasePointer}>Pointer</button>
    </div>
  )
}

export default MyUseEffect