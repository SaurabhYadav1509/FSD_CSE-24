import React from 'react'
import Icard from './Icard'
import img from '../assets/hero.png'

function IcardGallery() {

    const student =[{
        pic:img,
        college:'ABES Engineering College',
        roll:'1014',
        name:'ramu',
        branch:'cse'
    },
    {
        pic:img,
        college:'ABES Engineering College',
        roll:'1015',
        name:'ramesh',
        branch:'ece'
    },
    {
        pic:img,
        college:'ABES Engineering College',
        roll:'101',
        name:'ravi',
        branch:'it'
    }
    ]
  return (
    <div>
{
/*         
    <Icard pic={img} college="ABES College" roll="445566" name="qwerty" branch="CSE" />
    <Icard pic={img} college="ABES College" roll="445566" name="qwerty" branch="CSE" /> */}
    {/* <Icard data={student[0]} /> */}

    {
        student.map((ele)=>(
          <Icard data = {ele} />
        ))
    }
    </div>
  )
}

export default IcardGallery