import React from 'react'
import { useState } from 'react'
import image from './assets/cat.png'
function ImageManipulation() {

    const [catHeight, setCatHeight] = useState(100)
    const [catWidth, setCatWidth] = useState(100)

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    
    const [catAngle, setCatAngle] = useState(30);

    function increaeHeight(){
        setCatHeight(catHeight + 10)
    }

        function increaeWidth(){
        setCatWidth(catWidth + 10)
    }

    function rotateImage(){
    setCatAngle(catAngle + 30);
    }

// function setColor1(){
//         setRed(255);
//         setGreen(0);
//         setBlue(0);
//     }
//     function setColor2(){
//         setRed(0);
//         setGreen(255);
//         setBlue(0);
//     }
//     function setColor3(){
//         setRed(0);
//         setGreen(0);
//         setBlue(255);
//     }


    function changeBGColor(){

setRed(Math.random()*255);
setGreen(Math.random()*255);
setBlue(Math.random()*255);

    }

   return (
    <div>
        <div style={{backgroundColor:`rgb(${red}, ${green}, ${blue})` ,height:'300px', width:'300px', border:'4px solid yellow', margin:'100px'}}>
         <img src={image} height = {catHeight} width = {catWidth} style={{transform: `rotate(${catAngle}deg)`}}/>

        </div>

        <div>
<button onClick={increaeHeight}> Increase Height</button>
<button onClick={increaeWidth}> Increase Widht</button>

<button onClick={changeBGColor}>Change Background Color</button>
<button onClick={rotateImage}>Rotate Image</button>

        </div>

        </div>
  )
}

export default ImageManipulation