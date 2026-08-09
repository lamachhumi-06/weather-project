import axios from "axios";
import { useState, useEffect } from "react";
const apiKey = "f2c26b3ec711e715211a495129ef8869"

function Home() {
    const [city, setCity] = useState("Kathmandu");
    const [weather, setWeather] = useState(null);

    useEffect(() => { fetchWeather(city); }, [city]);
    const fetchWeather = async (selectedCity) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=imperial`);
            setWeather(response.data);
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <h1>Weather Dashboard</h1>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option>Kathmandu</option>
                <option>London</option>
                <option>Paris</option>
                <option>Sydney</option>
                <option>Tokyo</option>
            </select>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°F</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Condition: {weather.weather[0].main}</p>
                </div>
            )}
        </div>

    );
}
export default Home