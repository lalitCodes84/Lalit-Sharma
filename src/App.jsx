import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className='h-screen overflow-y-auto'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default App