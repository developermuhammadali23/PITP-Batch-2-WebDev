import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=78c8635a6a3c4cb3bfa104110253012&q=${city}&aqi=no`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeather(null);
    }
  };

  // Background based on weather
  const getBackground = () => {
    if (!weather) return "linear-gradient(135deg, #74ebd5, #9face6)";
    const condition = weather.current.condition.text.toLowerCase();
    if (condition.includes("sun")) return "linear-gradient(135deg, #f6d365, #fda085)";
    if (condition.includes("cloud")) return "linear-gradient(135deg, #d7d2cc, #304352)";
    if (condition.includes("rain")) return "linear-gradient(135deg, #4e54c8, #8f94fb)";
    if (condition.includes("snow")) return "linear-gradient(135deg, #e0eafc, #cfdef3)";
    return "linear-gradient(135deg, #74ebd5, #9face6)";
  };

  return (
    <div className="app" style={{ background: getBackground() }}>
      <div className="side-name">
        <p>Made by</p>
        <h2> Muhammad ali</h2>
      </div>

      <div className="weather-card">
        <h1>🌦 Weather App</h1>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Check Weather</button>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <img
              src={weather.current.condition.icon}
              alt="weather icon"
              style={{ width: "80px", height: "80px" }}
            />
            <p>🌡 Temperature: {weather.current.temp_c} °C</p>
            <p>☁ Condition: {weather.current.condition.text}</p>
            <p>💧 Humidity: {weather.current.humidity}%</p>
            <p>💨 Wind Speed: {weather.current.wind_kph} kph</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;