import React, { useEffect, useState } from 'react';
import { Card, Typography, Divider } from '@mui/material';
import axios from 'axios';

const Forecast = ({ future }) => {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (future) {
      setForecast(future.forecast.forecastday);
    }
  }, [future]);

  console.log(forecast);

  return (
    <Card variant="elevation" sx={{ backgroundColor: "#202B3C", color: 'white', p: 2, borderRadius: '10px', height: '100%', width:"100%", display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
      <Typography variant="h6" color="#787F89" sx={{ fontWeight: 'bold', pb: 2 }}>
        7-DAY FORECAST
      </Typography>
      <div className='h-auto md:h-96 w-full flex flex-col overflow-y-auto gap-2'>
        {forecast.map((day, index) => (
          

            <div className="grid grid-cols-2 gap-2 p-2  justify-center items-center border border-[#787F89] rounded-lg">
              <div className='flex flex-col items-center'>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {index === 0 ? 'Today' : new Date(day.date).toLocaleDateString(undefined, { weekday: 'long' })}
                </Typography>

                <Typography variant="subtitle1">
                  {day.date}
                </Typography>
              </div>
 
              
              <div className="flex flex-col items-center">
                <img src={day.day.condition.icon} alt={day.day.condition.text} />
                <Typography variant="body2">
                  {day.day.condition.text}
                </Typography>
              </div>
            </div>
 
        ))}
      </div>
    </Card>
  );
};

export default Forecast;