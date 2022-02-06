import React from 'react'
import Navbar from './components/Navbar.js'
import Meme from './components/Meme.js'

export default function App() {
    return (
        <div>

            <Navbar/>
            <Meme />
            <p style={{marginLeft: "10vw"}}>By: Bassam El-Naggar</p>

        </div>
    )
}