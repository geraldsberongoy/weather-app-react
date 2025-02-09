import { useState, useEffect } from "react";
import axios from "axios";
import { Container, CircularProgress, Box, TextField, Button, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import WeatherCard from "./components/WeatherCard";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Manila");
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = "33a73e7e854d44b6b35161731250802"; // Replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000);
    return () => clearInterval(interval);
  }, [city]);

  const handleCityChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleCitySubmit = () => {
    setCity(inputCity);
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <TextField
          label="Enter City"
          variant="filled"
          value={inputCity}
          onChange={handleCityChange}
          style={{ marginBottom: '20px', backgroundColor: 'white', borderRadius: '5px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCitySubmit} style={{ marginBottom: '20px' }}>
          Get Weather
        </Button>
        {loading ? (
          <CircularProgress />
        ) : weather ? (
          <WeatherCard weather={weather} />
        ) : (
          <Typography variant="body2" color="error">
            Error fetching weather data.
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default Weather;
