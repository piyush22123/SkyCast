import React, { useState, useEffect } from 'react';
import "./home_style.css";
import Details from '../../components/details/Details';
import { Link, useLocation } from 'react-router-dom';
import WeatherData from '../../API_function/WeatherData';
import Loader from '../../components/Loader/Loader';


const Home = () => {
  const location = useLocation();
  const { city, country } = location.state;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetch weather data based on city and country
        const data = await WeatherData(city, country);
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, country]);

  if (loading) {
    return <Loader />; // Display loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching data fails
  }

  //logic for am/pm
  let estimate = "";
  if(now.getHours() > 12){
    estimate = "PM"
  }
  else{
    estimate = "AM"
  }
  
  let greeting = "";
  const hour = now.getHours();
  
  if (hour >= 0 && hour < 12) {
      greeting = 'Good Morning';
  } else if (hour >= 12 && hour < 16) {
      greeting = 'Good Afternoon';
  } else if (hour >= 16 && hour < 21) {
      greeting = 'Good Evening';
  } else {
      greeting = 'Good Night';
  }



  return (
    <div className="home">
      <div className="top">
        <div className="heading">
          <p>{weather.name}, {weather.sys.country}</p>
          <h3>👋{greeting}!</h3>
        </div>
        <div className="Landingpage">
          <Link to='/'>
            <button>Change location</button>
          </Link>
        </div>
      </div>

      <div className="middle">

        <img src={`//openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        <h1>{weather.main.temp} °C</h1>
        <h5>{weather.weather[0].main}</h5>
        <p>{days[now.getDay()] + " " + now.getDate() + " | " + now.getHours() + ":" + now.getMinutes()}</p>

        <Link to='/Alldays' className="link-no-underline">
          <h4>Next day <i className="fa-solid fa-arrow-right"></i></h4>
        </Link>
      </div>

      <div className="bottom">
        <Details city = {city} country = {country}/>
      </div>
    </div>
  );
}

export default Home;
