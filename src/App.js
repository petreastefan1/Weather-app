import React, {useEffect, useState} from "react";
import Main from "./Components/Main/Main"
import "./App.css"
import {getCurrentLocationWeather, getCurrentIp} from "./Components/Services/WeatherService";
import {Header} from "./Components/Header/Header";

function App() {

    const [weather, setWeather] = useState([])
    useEffect(() => {
        handleFetchedWeather()

    }, [])

    const handleFetchedWeather = async () => {
        let ip = await getCurrentIp()
        let data = await getCurrentLocationWeather(ip.query)
        setWeather(data)
        console.log(data)
    }


    return (
        <>
            <Header/>

            <Main weatherInfo={weather}/>


        </>


    );
}

export default App;
