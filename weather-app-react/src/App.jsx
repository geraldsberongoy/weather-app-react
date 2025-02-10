import { useState, useEffect } from "react";
import axios from "axios";
import { Container, CircularProgress, Box, TextField, Button, Typography, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import Sidebar from "./components/Sidebar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import SearchBar from "./components/SearchBar";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Manila");
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState([]);
  const API_KEY = "33a73e7e854d44b6b35161731250802"; // Replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
        );
        setWeather(response.data);

        const forecastResponse = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alerts=no`
        );
        const filteredForecast = forecastResponse.data.forecast.forecastday[0].hour.filter(hour => 
          ["12:00", "3:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"].includes(hour.time.split(" ")[1])
        );
        setForecast(filteredForecast);
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
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', height: '100vh', padding: '25px' }}>
        {/* <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', gap: '10px', mb: '20px' }}>
        <TextField
          label="Enter City"
          variant="filled"
          value={inputCity}
          onChange={handleCityChange}
          style={{ backgroundColor: 'white', borderRadius: '5px' }}
        />
        <Button variant="contained" onClick={handleCitySubmit} style={{ marginBottom: '20px', height: "100%" , backgroundColor: "#202B3C", color: 'white' }}>
          <Search  />
        </Button>
        </Box> */}

        <div className="bg-[#202B3C] p-1 pl-3 rounded-md mb-4 flex items-center">
          <InputBase
            sx={{ ml: 1, flex: 1 , color: 'white' }}
            placeholder="Search City..."
            inputProps={{ 'aria-label': 'search city' }}
            value={inputCity}
            onChange={handleCityChange}
          />  
          <Button onClick={handleCitySubmit} >
            <Search sx={{color: 'white'}}/>
          </Button>
        </div>

        {loading ? (
          <CircularProgress />
        ) : weather ? (
          <>
            <WeatherCard weather={weather} />
            <ForecastCard forecast={forecast} />
          </>
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
