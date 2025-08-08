import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const NewsCard = ({news}) => {
    const {dark}=useContext(ThemeContext)
  return (
    <div className={dark?"relative border border-gray-200 p-4 rounded-sm flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-6 my-2":" my-2 relative border border-gray-900 p-4 rounded-sm flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-6"}>
    <img  src={news.urlToImage||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEVYWFpZWVvz8/Pz8/VTU1X29vZLS02tra5QUFJra22JiYqSkpPf3+DW1tf6+vrMzM1fX2FmZmhwcHJ7e33p6eq/v8Campu3t7hGRkiDg4WlpabGxsd1dXZAQEI1NTg7Oz3yYPz5AAAFH0lEQVR4nO2ZiXajOBBFAS0IGxUSiM12T///X3YBZrHjJIUnaHrO0TuJIVgx16rSoyRF8V+oKI7+OgUoqgIUVQGKqgBFVYCiKkBRFaCoClBUBSiqAhRVAYqqAEVVgKIqQFEVoKgKUFQFKKoCFFUBiqoARdVOKK7eFD8Qqjq9qWrPbfZB8QLEW4L8SCiRbMSSJ7HP3hH6YCgBOyUYQu24y34o5przXuXi4J4Seaz4PiktDu4pkRtq48UG9PE9RYNSvLwZuUJRv8qRUPKknXNtNPaWZgf3FCNBqRpwnDJIsoHq8PA9Q718fqgzsMGqGOgRivlNdF6pV5+azyYrzjzinhOdl6580Vd2MX5olffRp1LIP0aQZ7BA1dI7FMZpvO2T7PLQg1T5tgRewXDfD1RYTcwP5or7hupqGIZY/5zsvErGrGJjSo2jzx+UcePAd9lzWsneYXUAcB078XDz3EKpZhplIufPVMpcCl1X02Wvib7UfK+SXXZdd0f1CcUtm8vMF8m+kU8oeYF16PdfUPmsp3gu2FyMM3f7fBblcfSpfjs9EHm3tpOPgB7Dp2qYMoqNguvsVtzMw26G8mgJjg3Rm6EYpFNfySyH4sFO/ZUuWDM9Te5GZ+fqgm4Ol23e+3vMSC2eoJizOHWZgppsKxpvUPw2GtTDVBicLB3cp8RbKF81uroAG5EmMjakVgLaiekvBs06Gr3llHKCzf20HsTiWyxZjcsXFC/hgWY9sGnKgAFcct2XJXRXSFY7n+LI7nG8R3Qdgb4c3To23Z+NSJNTTScL2lJmeYJSzdakPqxT3QejViuUh/DJ7erZ4gyPKYZUzRRAP1UCN89u/mCi68k0Av2Y57aS+kr3EejJ0fPtI+Yhdo+dNQXQCxQ/kZeF3TzvO/4xcyOvezYjlBdH37Hx4GV9CqF2bWkMa58eoG7ZXh1unmv5yzZnX8vDjsMnPvmx5puf1Hg8FErv3QKZRV59fwPqnL6p5rieipR8U6+Wa38Kyo8CFFX/Vyg+bZJNL+MVNf09rSnOl7naXpyOiq8Npn/lHxYi34IydviJuB1fxrv3wwqZRaH5xJbjbxzJ6hSpeLg4tBnfVLLvOx5jK2xg8JFpzPCG+mrRjwaFUwSbw6XrQXA8b6Ua1s6TOMMJskhVVEIhb5DFTjg49cOOsTbcAiSiqYRLXHmDs6ygr+H0q9AGhJiWsf8lFLMab5yC479yh86si9i61EI1fHOeCThlYFtXRrWzNnU37CkDTWSk0ybOtWUIxaoW3D81Qp1NCl8s+lGhhNVFYvNrIsvkJk6l6LtzX2agtcYKLoM2KaF0bYf903eNGyobI4o6LcVZyQYMTFDaXVqEOknjLt8EkASVt3nrmqRrXe+uVvS/dVJYSJsmG/aGyvzKyhyhDPTy4oaUQqh2hsL2skqquuiT4uegsJfSC9SnxLhca5AYkShHqN5mdoAyNxjCdzNXZ2coTCDZ5doYDKFrOaLVWl6hwLhmKXzYoHivp/Bbn8UJjMySJksSlxfj7tmY6FlXQ4bzGwc9v0NZOKuIVw5bljgdc6L4fdUqS4phvigu37nC95YQoyXgeIpwUI/pYtESSmlXSxicAi2h7AenMlOJYoZPxYZVxyNpsf04KH7MEu6uN7rf/A35S/Pka+u55eKkyyf9kHn+BwpQVAUoqgIUVQGKqgBFVYCiKkBRFaCoClBUBSiqAhRVAYqqAEVVgKIqQFEVoKgKUFQFKKoCFFUBiiqE+gv1BwwVX0VlHyvuAAAAAElFTkSuQmCC"} className='object-cover h-52 rounded-lg w-full md:w-60' alt="" />
    <div>
    <h1 className='text-xl text-gray-400 font-semibold '>{news.title}</h1>
    <p className='text-sm text-gray-500  '>{news.description}</p>
    <p className='text-xs mt-4 text-gray-500 '>Source: {news.source.name}</p>
    <p className='text-xs mt-1 text-gray-500  '>Date: {new Date(news.publishedAt).toLocaleDateString('en-IN')}</p>
    </div>
    <a href={news.url} target='_blank' className='bg-cyan-600 hover:bd-cyan-800 cursor-pointer py-2 px-4 rounded-md text-sm absolute bottom-5 right-5'>Read Full News</a>
  </div>
  )
}

export default NewsCard