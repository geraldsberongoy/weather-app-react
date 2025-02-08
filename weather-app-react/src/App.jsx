import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, CardContent, Typography, CircularProgress, Box, TextField, Button } from "@mui/material";

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
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );
        setWeather(response.data);
        console.log("Weather updated");
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); // Update every 60 sec
    return () => clearInterval(interval);
  }, [city]);

  const handleCityChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleCitySubmit = () => {
    setCity(inputCity);
  };

  return (
    <div className="w-screen h-screen">
      <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
          <Card variant="outlined" sx={{ backgroundColor: '#f0f0f0' }}>
            <CardContent>
              
              <Typography variant="h5" component="div">
                Weather in <span style={{ fontWeight: 'bold' }}>{weather.location.name}</span>
              </Typography>
              <Typography variant="body2">
                Time: {weather.location.country}
              </Typography>
              <Typography variant="body2">
                Time: {weather.location.localtime}
              </Typography>
              <Typography variant="body2">
                Temperature: {weather.current.temp_c}°C
              </Typography>
              <Typography variant="body2">
                Condition: {weather.current.condition.text}
              </Typography>
              <Box component="img" src={weather.current.condition.icon} alt="Weather icon" />
            </CardContent>
          </Card>
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