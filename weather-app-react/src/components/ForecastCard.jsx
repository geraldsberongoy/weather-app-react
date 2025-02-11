import React from "react";
import { Box, Typography, Divider , Card} from "@mui/material";

const ForecastCard = ({ forecast }) => {
  console.log(forecast);
  const time = [
    "12:00 AM", "3:00 AM","6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"
  ];

  return (
    <Card variant="elevation" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', bgcolor: "#202B3C", borderRadius: '10px', p: 3, color: 'white', height: '100%' }}>
      <Typography variant="h6" color="#787F89">
        <strong >TODAY&apos;S FORECAST</strong>
      </Typography>
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex items-center">
        {forecast.map((hour, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', bgcolor: "#202B3C", borderRadius: '5px' }}>
              <Typography variant="body2" color="#787F89"><strong>{time[index]}</strong></Typography>
              <img src={hour.condition.icon} alt="weather icon" />
              <Typography variant="body2"><strong>{hour.temp_c}°C</strong></Typography>
            </Box>
            {index < forecast.length - 1 && <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white' }} />}
          </React.Fragment>
        ))}
      </div>
      </div>
      
    </Card>
  );
};

export default ForecastCard;
