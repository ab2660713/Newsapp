import React, { useContext } from 'react'
import NewsContext from '../context/news/NewsContext'
import fetchNews from '../context/news/NewsService'

const Trendinglist = () => {
  const {dispatch}=useContext(NewsContext)
  const getNews=async(topic)=>{
    const data=await fetchNews(topic)
    dispatch({
      type:"GET_NEWS",
      payload:data
    })
  }
  return (
    <ul className='my-2 flex items-center justify-center  flex-wrap'>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Bollywood")}>Entertainment </li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Indore")}>Indore</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Indian Politics")}>Politics</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Indian Business")}>Business</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("International")}>International</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("indian Education")}>Education</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Technology")}>Technology</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Indian Sports")}>Sports</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Trending")}>Trending</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Indian Funny")}>Meme</li>
      <li className=' px-2 cursor-pointer m-1  hover:bg-cyan-800 bg-cyan-600 rounded-sm text-white text-center p-.5 'onClick={()=>getNews("Artificial Intelligence")}>Artificial Intelligence</li>
     
    
    </ul>
  )
}

export default Trendinglist