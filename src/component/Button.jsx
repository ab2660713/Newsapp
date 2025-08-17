import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import {Moon, Sun} from 'lucide-react'
const Button = () => {
  const {dispatch,dark}=useContext(ThemeContext)
   
  const Themebutton=()=>{
    localStorage.setItem("theme",JSON.stringify(dark?false:true))
    dispatch({type:"SWITCH_THEME"})
  }
  
  return (
   <button className= {dark?'bg-cyan-800 py-2 px-3 cursor-pointer rounded-full text-white font-semibold fixed bottom-10 left-5 duration-150' : 
    ' duration-150 bg-black py-2 px-3 cursor-pointer rounded-full text-white font-semibold fixed bottom-10 left-5' } onClick={Themebutton}>
    {
      dark?<Sun/>:<Moon/>
    }
   </button>
  )
}

export default Button