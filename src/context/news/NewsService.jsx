const getDate=()=>{
let currentDate=new Date(Date.now()).toLocaleDateString('en-IN').split("/")
let date=currentDate[0];
let month=currentDate[1]-1;
let year=currentDate[2];
return `${year}-${month}-${date}`
}

export const fetchNews=async(topic)=>{
    const date=getDate()
    const response=await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date}&sortBy=publishedAt&apiKey=75c61193e578436c96d22e1fc36701f2
`)
const data=await response.json()

// console.log(data)
return data.articles
}
export default fetchNews
