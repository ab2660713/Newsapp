export const fetchNews=async(topic)=>{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2025-07-07&sortBy=publishedAt&apiKey=75c61193e578436c96d22e1fc36701f2
`)
const data=await response.json()

// console.log(data)
return data.articles
}
export default fetchNews