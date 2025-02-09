import React from "react";
import { Box, Typography, Divider , Card} from "@mui/material";

const ForecastCard = ({ forecast }) => {
  const time = [
    "6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"
  ];

  return (
    <Card variant="elevation" sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mb: '20px', alignItems: 'start', bgcolor: "#202B3C", borderRadius: '10px', p: 3, mt: 2, color: 'white' }}>
      <Typography variant="h6" color="white">
        <strong>Today&apos;s Forecast</strong>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
        {forecast.map((hour, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', bgcolor: "#202B3C", borderRadius: '5px' }}>
              <Typography variant="body2"><strong>{time[index]}</strong></Typography>
              <img src={hour.condition.icon} alt="weather icon" />
              <Typography variant="body2">{hour.temp_c}°C</Typography>
            </Box>
            {index < forecast.length - 1 && <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white' }} />}
          </React.Fragment>
        ))}
      </Box>
    </Card>
  );
};

export default ForecastCard;
