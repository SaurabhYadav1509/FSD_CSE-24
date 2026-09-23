import React, { useState } from 'react'

function UpdateName() {

    const [name, setName] = useState('Rahul');
    const [college, setCollege] = useState('ABES');

    function updateName() {
        setName('Saurabh');
    }
    function updateCollege(){
        setCollege('ABES College');
    }
    return (
        <div>

            <h2>Name: {name}</h2>

            <h2>College: {college}</h2>

            <button onClick={updateName}>
                Update Name
            </button>

            <button onClick={updateCollege}>
                Update College
            </button>

        </div>
    )
}

export default UpdateName