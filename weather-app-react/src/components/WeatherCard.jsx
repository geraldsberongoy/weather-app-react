import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherCard = ({ weather }) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Weather in <strong>{weather.location.name}, {weather.location.country}</strong>
        </Typography>
        <Typography variant="body2">Local Time: {weather.location.localtime}</Typography>
        <Typography variant="body2">Temperature: {weather.current.temp_c}°C</Typography>
        <Typography variant="body2">Condition: {weather.current.condition.text}</Typography>
        <Typography variant="body2">Wind: {weather.current.wind_kph} kph</Typography>
        <Typography variant="body2">Humidity: {weather.current.humidity}%</Typography>
        <Typography variant="body2">Air Quality Index: {weather.current.air_quality.pm2_5}</Typography>
        <Box component="img" src={weather.current.condition.icon} alt="Weather icon" />
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
