import { Height } from "@mui/icons-material";
import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherCard = ({ weather }) => {
  return (
    <Card variant="elevation" sx={{ backgroundColor:  "#202B3C" , color: 'white', display: 'flex' , flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', p:2, borderRadius: '10px', width: '55%' }}>
        <div className="flex flex-col justify-around h-full ">
          <div>
              <Typography variant="h5" component="div" >
                <strong>{weather.location.name}, {weather.location.country}</strong>
            </Typography>
            <Typography variant="body2">{weather.location.localtime}</Typography>
          </div>
          
          <Typography variant="h4">
            <strong>
              {weather.current.temp_c}°
              </strong>C
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center h-full">

          <img 
          src={weather.current.condition.icon.replace("64x64", "128x128")} 
          alt="Icon Weather" 
          width="128" 
          height="128" 
          />

          <p style={{ textTransform: "uppercase" , }}><strong>{weather.current.condition.text}</strong></p>

        </div>



    </Card>
  );
};

export default WeatherCard;
