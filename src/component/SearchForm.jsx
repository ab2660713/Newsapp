import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import Trendinglist from './Trendinglist'
import { Search } from 'lucide-react'
import NewsContext from '../context/news/NewsContext'
import fetchNews from '../context/news/NewsService'
const SearchForm = () => {
  const {dispatch}=useContext(NewsContext)
  const {dark}=useContext(ThemeContext)
  const [topic, setTopic] = useState("");

  // const {dispatch}=useContext(NewsContext)
  const getNews=async(topic)=>{
    const data=await fetchNews(topic)
    dispatch({
      type:"GET_NEWS",
      payload:data
    })
  }
  const handleGetSubmit=(e)=>{
    e.preventDefault()
    getNews(topic)
    setTopic("")
    
  }

  return (
    <div className={dark?" border border-gray-300 p-4 rounded-sm w-full shadow-md":" border border-gray-800 p-4 rounded-sm w-full"}>
    <h1 className='text-center my-2 text-gray-600 font-bold text-4xl flex space-x-2 items-center justify-center'><Search className='mx-2'/>Search Any News</h1>
    <p className='text-center mb-2 text-gray-400 text-sm'>Search Any News,Anywhere 24/7!!</p>
    <form onSubmit={handleGetSubmit}>
      <input value={topic} onChange={(e)=>setTopic(e.target.value)} type="text" placeholder='Enter Any Topic ' className=' mb-2 border border-gray-100 bg-white w-full py-2 px-4 rounded-md  focus:outline-none' />
    <button className='hover:bg-cyan-800 bg-cyan-500 cursor-pointer my-2 w-full py-2 px-4 rounded-md text-white font-semibold'> Search News</button>
    </form>
  <Trendinglist/>
  </div>
  )
}

export default SearchForm