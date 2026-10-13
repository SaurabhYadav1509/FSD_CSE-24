import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Icard from './components/Icard'
import IcardGallery from './components/IcardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange'
import UpdateName from './components/UpdateName'
import ImageManipulation from './ImageManipulation'
import MyUseEffect from './components/MyUseEffect'
import FetchProducts from './components/FetchProducts'
import Login from './components/Login'
import Registration from './components/Registration'
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  
  return (
    <>
    
<div >

{/* <IcardGallery/> */}
{/* <MyState/> */}
{/* <ColorChange/> */}
{/* <UpdateName/> */}
{/* <ImageManipulation/> */}
{/* <MyUseEffect/> */}
{/* <FetchProducts/> */}

<BrowserRouter>
<Routes>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/registration' element={<Registration />}></Route>
  <Route path='/dashboard' element={<Dashboard />}></Route>
  <Route path='/' element={<Home />}></Route>
  
</Routes>
</BrowserRouter>
</div>
    </>
  )
}

export default App
