import React, { useState, useEffect, useRef } from "react";

function RealtimeWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const intervalRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/weather");
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();

    intervalRef.current = setInterval(fetchData, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Real-time Weather</h1>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
}

export default RealtimeWeather;
