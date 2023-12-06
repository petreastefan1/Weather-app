import React, {useEffect, useState} from "react";
import Main from "./Components/Main/Main"
import "./App.css"
import {getCityWeather, getCurrentIp} from "./Components/Services/WeatherService";
import {Header} from "./Components/Header/Header";

function App() {

    const [weather, setWeather] = useState([])
    const [ip, setIp] = useState("")
    useEffect(() => {
        handleFetchedWeather()
        handleFetchedIp()
    }, [])

    const handleFetchedWeather = async () => {
        let data = await getCityWeather()
        setWeather(data)
        console.log(data)
    }

    const handleFetchedIp = async () => {

        let data = await getCurrentIp()
        setIp(data)
    }

    return (
        <>
            <Header/>
            <Main/>
        </>


    );
}

export default App;
