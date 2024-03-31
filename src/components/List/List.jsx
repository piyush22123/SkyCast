import React, { useState, useEffect } from 'react';
import './style.css';
import FivedaysData from '../../API_function/FivedaysData';

const List = ({ index }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetch weather data based on user's current location
        const data = await FivedaysData();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching data fails
  }

  // Access weather data based on the index
  const weatherData = weather.list[index];

  // Convert UTC timestamp to local time and format as "Day Date"
  const date = new Date(weatherData.dt * 1000); // Convert from seconds to milliseconds
  const options = { weekday: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  // Weather icon URL
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div className='list'>
      <h3>{formattedDate}</h3>
      <div className="mid">
        <img src={iconUrl} alt="Weather icon" />
        <h4>{weatherData.weather[0].main}</h4>
      </div>
      <h1>{weatherData.main.temp} °C</h1>
    </div>
  );
}

export default List;
