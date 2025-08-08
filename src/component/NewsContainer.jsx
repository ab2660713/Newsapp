import React, { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'
import NewsCard from './NewsCard'
import NewsContext from '../context/news/NewsContext'
import { fetchNews } from '../context/news/NewsService'

const NewsContainer = () => {
    const {dark}=useContext(ThemeContext)
 const {allNews,dispatch}=useContext(NewsContext)



 //Fetching News
 const getNews=async(topic)=>{
    const data =await fetchNews(topic)
 dispatch({
    type:"GET_NEWS",
    payload:data
 })
}


 useEffect(()=>{
    getNews("Indore")
 },[])
 if(!allNews||allNews.length===0){
    return(
        <h1 className="text-center my-4 text-4xl text-gray-400">Loading...</h1>
    )
 }
    return (
    <div className={dark?"border border-gray-200 p-4 rounded-md col-span-1 md:col-span-2":"border border-gray-900 p-4 rounded-md col-span-1 md:col-span-2"}>
{
    allNews.map((news,index)=><NewsCard key={index} news={news}/>)
}
</div>
  )
}

export default NewsContainer