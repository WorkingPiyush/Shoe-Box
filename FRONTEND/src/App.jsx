import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TypeofShoes from './components/TypeofShoes'
import ShoeSection from './components/ShoeSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-white'>
      <Navbar />
      <Hero />
      <TypeofShoes />
      <ShoeSection />
    </div>
  )
}

export default App
