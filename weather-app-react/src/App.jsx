import { useState, useEffect } from "react";
import axios from "axios";
import { Container, CircularProgress, Box, TextField, Button, Typography, InputBase, Card, Grid } from "@mui/material";



import Sidebar from "./components/Sidebar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import AirConditionCard from "./components/AirConditionCard";
import SearchBar from "./components/SearchBar";
import SevenDayForecast from "./components/SevenDayForecast";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Manila");
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [chanceOfRain, setChanceOfRain] = useState(null);
  const [future, setFuture] = useState(null);
  const API_KEY = "33a73e7e854d44b6b35161731250802"; // Replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
        );
        setWeather(response.data);

        const forecastResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alerts=no`
        );
        const filteredForecast = forecastResponse.data.forecast.forecastday[0].hour.filter(hour => 
          [ "00:00","03:00","06:00", "09:00", "12:00", "15:00", "18:00", "21:00"].includes(hour.time.split(" ")[1])
        );
        setForecast(filteredForecast);
        setChanceOfRain(forecastResponse.data.forecast.forecastday[0].day.daily_chance_of_rain);

        const futureResponse = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
        );
        console.log(futureResponse.data);
        setFuture(futureResponse.data);
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
    <div className="w-screen h-auto md:h-screen flex px-5 ">

      <div className="flex flex-col w-full h-full p-3">

        <SearchBar inputCity={inputCity} handleCityChange={handleCityChange} handleCitySubmit={handleCitySubmit} />
        {loading ? (
          <CircularProgress />
        ) : weather ? (
          <div className="flex flex-col lg:flex-row gap-4  w-full h-full ">
          {/* {Left Details} */}
            <div className="flex flex-col  flex-2 gap-3 h-full">
              <div className="flex gap-2 w-full h-full flex-col sm:flex-row ">
                <WeatherCard weather={weather} />
                <AirConditionCard weather={weather} chanceOfRain={chanceOfRain} />
              </div>
              
              <ForecastCard forecast={forecast} />
            </div>
            <div className="flex-1 h-full w-full ">
              <SevenDayForecast future={future} />
            </div>
          </div>
        ) 
        
        : (
          <Typography variant="body2" color="error">
            Error fetching weather data.
          </Typography>
        )}
      </div>
    </div>
  );
};

export default App;