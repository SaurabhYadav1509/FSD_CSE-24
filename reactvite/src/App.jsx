import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Icard from './components/Icard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
<div style={{border:'2px solid red', width:'400px',height:'300px'}}>


<Icard />
</div>
    </>
  )
}

export default App
