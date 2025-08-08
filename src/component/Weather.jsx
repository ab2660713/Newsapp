import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import WeatherContext from '../context/wheather/WheatherContext'
import { fetchWeather } from '../context/wheather/weatherService'

const Weather = () => {
  const [city,setCity]=useState("")
   const {dark}=useContext(ThemeContext)
   const {weatherData,dispatch}=useContext(WeatherContext)
   const getWeather=async(city)=>{
    const data= await fetchWeather(city)
dispatch({
  type:"GET_WEATHER",
  payload:data
})
   }
   const handleFormSubmit=(e)=>{
    e.preventDefault()
    getWeather(city)
    setCity("")
   }
   useEffect(()=>{
getWeather("Indore")
   },[])
   
   if(!weatherData){
    return(
      <div className={dark?"border border-gray-200 p-4 rounded-md":"border border-gray-900 p-4 rounded-md"}>
    <h3 className='text-gray-500 text-xl mb-4 font-semibold'>Weather Loading...</h3>
  
  </div>
    )
   }
   return (
    <div className={dark?"border border-gray-200 p-4 rounded-md":"border border-gray-900 p-4 rounded-md"}>
    <h3 className='text-gray-500 text-xl mb-4 font-semibold'>Today's Weather</h3>
  <div className='flex item-center justify-between'>
  <div>
    <h1 className='text-gray-500 text-4xl my-4 font-semibold'>{weatherData?.current?.temp_c}</h1>
    <h2 className='text-gray-500 text-xl font-semibold'>{weatherData?.location?.name}</h2>
    </div>
    <div>
      <img className='h-16 mb-4 ' src={weatherData?.current?.condition?.icon} alt="icon" />
      <p className='text-gray-400 text-sm text-center '>{weatherData?.current?.condition?.text}</p>
    </div>
    
  </div>
  <form onSubmit={handleFormSubmit} className='my-4' >
      <input value={city} onChange={(e)=>setCity(e.target.value)} className='p-2 border border-gray-400 w-full rounded-sm text-gray-500'  type="text" placeholder='Enter City Name' name="" id="" />
    <button className='bg-cyan-600 hover:bg-cyan-800 text-white my-2 w-full py-2.5 font-semibold cursor-pointer rounded-sm'>Search Weather</button>
    </form>
  </div>
  )
}

export default Weather