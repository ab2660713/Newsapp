import { children, createContext, useReducer } from "react";
import WeatherReducer from "./weatherReducer";

const WeatherContext=createContext()

export const WeatherProvider=({children})=>{
    const initialstate={
        weatherData:null
    }
    const [state,dispatch]=useReducer(WeatherReducer,initialstate)
    return (
        <WeatherContext.Provider value={{...state,dispatch}}>
        {children}
    </WeatherContext.Provider>
    )
}

export default WeatherContext