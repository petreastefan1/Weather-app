import React from "react";


function Main({weatherInfo}) {


    return (


        <main className="page-container">

            <section className="current-weather-container">
                {

                    Object.keys(weatherInfo).length > 0 && (
                        <section>
                            <div className="weather-container">
                                <div className="city-info-container">
                                    <div className="current-time-city-container">
                                        <p>Last updated</p>
                                        <p>{weatherInfo.current.last_updated}</p>
                                        <p className="city-item">{weatherInfo.location.name}</p>
                                    </div>

                                    <form className="city-input-container">
                                        <input placeholder="Find weather by city"/>
                                        <button type="button">Search</button>
                                    </form>
                                </div>


                                <div className="weather-display-container">
                                    <div className="weather-temp">
                                        <img src={`${weatherInfo.current.condition.icon}`}/>
                                        <p className="current-temp-item">{weatherInfo.current.temp_c}°C</p>
                                    </div>
                                    <div className="feels-like-container">
                                        <p>{weatherInfo.current.condition.text}</p>
                                        <p>Feels like {weatherInfo.current.feelslike_c}°C</p>
                                    </div>
                                </div>

                            </div>


                        </section>

                    )

                }


            </section>


        </main>
    )
}

export default Main