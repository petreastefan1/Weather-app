import React, {useEffect, useState} from "react";
import Home from "./Components/Main/Home"
import "./App.css"
import {getCityWeather, getCurrentIp} from "./Components/Services/WeatherService";

function App() {

    const [weather,setWeather] = useState([])
    const [ip,setIp] = useState("")
    useEffect(()=>{
        handleFetchedWeather()
        handleFetchedIp()
    },[])

    const handleFetchedWeather = async ()=>{
        let data = await getCityWeather()
        setWeather(data)
        console.log(data)
    }

    const handleFetchedIp = async ()=>{

        let data = await getCurrentIp()
        setIp(data)
    }

    return (


        <Home/>


    );
}

export default App;
