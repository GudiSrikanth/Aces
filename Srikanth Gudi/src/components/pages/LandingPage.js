import React from 'react'
import { Link } from 'react-router-dom'




import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
           
          <div className='Heading'>
              <h1>ACES</h1>
              </div>   
          

        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}