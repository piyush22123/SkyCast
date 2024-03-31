import React, { useState, useEffect } from 'react'
import './styles.css'
import weatherData from '../../API_function/WeatherData';
import Timezone from '../../API_function/Timezone';


const Details = ({city, country}) => {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Fetch weather data based on user's current location
                const data = await weatherData(city, country);
                setWeather(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city, country]);


    if (loading) {
        return <div>Loading...</div>; // Display loading indicator while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message if fetching data fails
    }

    
    return (
        <div className='details'>
            <div className="part">
                <div className="first">
                    <div className="icon1">
                        <i className="fa-solid fa-sun"></i>
                    </div>
                    <div className="data">
                        <p>Sunrise</p>
                        <Timezone timestamp = {weather.sys.sunrise} />                    
                    </div>
                </div>
                <div className="first">
                    <div className="icon2">
                        <i className="fa-solid fa-gauge"></i>
                    </div>
                    <div className="data">
                        <p>Pressure</p>
                        <h6>{weather.main.pressure} hPa</h6>
                    </div>
                </div>
                <div className="first">
                    <div className="icon3">
                        <i className="fa-solid fa-droplet"></i>
                    </div>
                    <div className="data">
                        <p>Humidity</p>
                        <h6>{weather.main.humidity} %</h6>
                    </div>
                </div>

            </div>
            <div className="part">
                <div className="first">
                    <div className="icon4">
                        <i className="fa-regular fa-sun"></i>
                    </div>
                    <div className="data">
                        <p>Sunset</p>
                        <Timezone timestamp = {weather.sys.sunset}/>
                    </div>
                </div>
                <div className="first">
                    <div className="icon5">
                        <i className="fa-solid fa-temperature-low"></i>
                    </div>
                    <div className="data">
                        <p>Feels like</p>
                        <h6>{weather.main.feels_like} °C</h6>
                    </div>
                </div>
                <div className="first">
                    <div className="icon6">
                        <i className="fa-solid fa-wind"></i>
                    </div>
                    <div className="data">
                        <p>Wind speed</p>
                        <h6>{weather.wind.speed} m/s</h6>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Details
