import axios from "axios";
import { useState, useEffect } from "react";

const apiKey = "f2c26b3ec711e715211a495129ef8869";

function Home() {
    const [city, setCity] = useState("Kathmandu");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async (selectedCity) => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=imperial`
                );
                setWeather(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchWeather(city);
    }, [city]);

    return (
        <div className="weather-container">
            <h1 className="weather-title">Weather Dashboard</h1>

            <select
                className="city-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option>Kathmandu</option>
                <option>London</option>
                <option>Paris</option>
                <option>Sydney</option>
                <option>Tokyo</option>
            </select>

            {weather && (
                <div className="weather-card">
                    <h2>{weather.name}</h2>
                    <p>
                        <strong>Temperature:</strong> {weather.main.temp}°F
                    </p>
                    <p>
                        <strong>Humidity:</strong> {weather.main.humidity}%
                    </p>
                    <p>
                        <strong>Condition:</strong> {weather.weather[0].main}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Home;