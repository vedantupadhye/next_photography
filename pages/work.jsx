import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar'

const work = () => {
  return (
    <div>
        <Navbar />
        <Hero heading = 'My Work' message='This is some of my travelling in the world' />
        <Portfolio />
    </div>

  )
}

export default work