import Enterdata from "../pages/Landingpage/Enterdata";
import key from "../key";



// Asynchronous function to fetch weather data based on user's current location
const WeatherData = async (city, country) => {
    try {
        // // Get user's current location
        // const position = await new Promise((resolve, reject) => {
        //     navigator.geolocation.getCurrentPosition(resolve, reject);
        // });

        // // Extract latitude and longitude from the obtained position
        // const latitude = position.coords.latitude;
        // const longitude = position.coords.longitude;
    
        // Fetch weather data using latitude and longitude from the OpenWeatherMap API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=metric`);
        
        // Check if the response is successful (HTTP status code 200)
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        // Parse the JSON response
        const data = await response.json();
        // console.log(data);
        // Return the fetched weather data
        return data;
    } catch (error) {
        // Handle errors gracefully
        console.error("Error fetching weather data:", error);
        throw new Error("Check your internet connectivity or Enter valid city");
    }
};

// Export the weatherData function to be used in other modules
export default WeatherData;
