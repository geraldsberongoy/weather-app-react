import { Height } from "@mui/icons-material";
import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherCard = ({ weather }) => {
  return (
    <Card variant="elevation" sx={{ backgroundColor:  "#202B3C" , color: 'white', display: 'flex' , gap: '1rem', flexDirection: 'row', alignItems: 'center', px: 3, py:2, borderRadius: '10px' }}>
        <Box>
        <Typography variant="h5" component="div" >
             <strong>{weather.location.name}, {weather.location.country}</strong>
        </Typography>
        <Typography variant="body2">{weather.location.localtime}</Typography>
        <Typography variant="h4" sx={{pt:5}}>{weather.current.temp_c}°C</Typography>

        </Box>
        <Box component="img" src={weather.current.condition.icon} alt="Weather icon" sx={{height: 100, width: 100, m:2}} />

    </Card>
  );
};

export default WeatherCard;
