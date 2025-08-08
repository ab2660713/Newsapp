import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { Newspaper } from 'lucide-react'

const Navbar = () => {
    const {dark}=useContext(ThemeContext)
    
  return (
    <nav className={dark?'bg-cyan-800 py-3 px-8 flex space-x-2':'bg-black py-3 flex space-x-2 px-8'}>
   <Newspaper className='text-white'/> <h1 className='text-xl font-semibold text-white'>Kal-Tak</h1>
  </nav>
  )
}

export default Navbar