import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import Button from './component/Button'
import ThemeContext from './context/ThemeContext'
import SearchForm from './component/SearchForm'
import Weather from './component/Weather'
import { WeatherProvider } from './context/wheather/WheatherContext'
import NewsContainer from './component/NewsContainer'
import { NewsProvider } from './context/news/NewsContext'

const App = () => {
  const {dark}=useContext(ThemeContext)
  return (
 <WeatherProvider>
<NewsProvider>
<Navbar/>
 <div className={dark?"p-8 min-h-screen ":"p-8 min-h-screen bg-gray-950"}>

 <SearchForm/>
 <h1 className='my-4 text-center text-gray-600 font-bold text-2xl'>Latest News</h1>
 <div className={dark?'border border-gray-400 rounded-sm p-4 grid grid-cols-1 md:grid-cols-3 gap-3':'border border-gray-900 rounded-sm p-4 grid grid-cols-1 md:grid-cols-3 gap-3'}>
<Weather/>
<NewsContainer/>
</div></div>
<Button/>
</NewsProvider>
 </WeatherProvider>
  )
}

export default App