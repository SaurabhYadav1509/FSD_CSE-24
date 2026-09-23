import React, { useState } from 'react'

function ColorChange() {
    const[Red,setRed] = useState(0);
    const[Green, setGreen] = useState(0);
    const[Blue, setBlue] = useState(0);

function setColor1(){
        setRed(255);
        setGreen(0);
        setBlue(0);
    }
    function setColor2(){
        setRed(0);
        setGreen(255);
        setBlue(0);
    }
    function setColor3(){
        setRed(0);
        setGreen(0);
        setBlue(255);
    }

  return (
    <div>
        <div style={{width:'500px', height:'500px', backgroundColor:`rgb(${red},  ${green}, ${blue})`}}></div>
        <div> 
        <button onClick={setColor1}>Red</button>
        <button onClick={setColor2}>Green</button>
        <button onClick={setColor3}>Blue</button>
        </div>

    </div>
  )
}

export default ColorChange