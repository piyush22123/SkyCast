// Asynchronous function to fetch weather data based on user's current location
const FivedaysData = async (city, country) => {
    try {
        // Fetch weather data using latitude and longitude from the OpenWeatherMap API
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=bhopal,india&appid=57f1f09d5913691473f418a4fe1e1220&units=metric`);
        
        // Check if the response is successful (HTTP status code 200)
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        
        // Parse the JSON response
        const data = await response.json();
        console.log(data);
        // Return the fetched weather data
        return data;
    } catch (error) {
        // Handle errors gracefully
        console.error("Error fetching weather data:", error);
        return null;
    }
};

// Export the weatherData function to be used in other modules
export default FivedaysData;
