import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Enterdata = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Navigate to the home page with city and country as state
            navigate('/home', { state: { city, country } });
        } catch (error) {
            console.error("Error navigating to home page:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="home-1">
            <h1>Welcome to <span>SkyCast</span></h1>
            <form id="container" onSubmit={handleSubmit}>
                <label htmlFor="city">Choose City:</label>
                <input
                    type="text"
                    id="city"
                    placeholder="e.g Delhi"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <label htmlFor="country">Choose Country:</label>
                <input
                    type="text"
                    id="country"
                    placeholder="e.g India"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                />
                <div className="go">
                    <button type="submit" disabled={isLoading} id='go-btn'>
                        {isLoading ? 'Loading...' : "Let's Go"}
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    
                </div>
            </form>

            <footer>Made with ❤️Love by <span>piyush</span></footer>
        </div>
    );
};

export default Enterdata;
