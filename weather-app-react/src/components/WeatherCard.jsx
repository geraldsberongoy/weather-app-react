import { Height } from "@mui/icons-material";
import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherCard = ({ weather }) => {
  return (
    <Card variant="elevation" sx={{ backgroundColor:  "#202B3C" , color: 'white', display: 'flex' , flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', p:2, borderRadius: '10px', width: '55%' }}>
        <div className="flex flex-col">
          <Typography variant="h5" component="div" >
              <strong>{weather.location.name}, {weather.location.country}</strong>
          </Typography>
          <Typography variant="body2">{weather.location.localtime}</Typography>
          <Typography variant="h4" sx={{pt:5}}>{weather.current.temp_c}°C</Typography>
        </div>
        <img 
          src={weather.current.condition.icon.replace("64x64", "128x128")} 
          alt="Icon Weather" 
          width="128" 
          height="128" 
        />



    </Card>
  );
};

export default WeatherCard;
