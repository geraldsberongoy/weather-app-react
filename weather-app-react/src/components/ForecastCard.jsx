import React from "react";
import { Typography , Card} from "@mui/material";

const ForecastCard = ({ forecast }) => {
  console.log(forecast);
  const time = [
    "12:00 AM", "3:00 AM","6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"
  ];

  return (
    <Card 
      variant="elevation" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'start', 
        bgcolor: "#202B3C", 
        borderRadius: '10px', 
        p: 3, 
        color: 'white', 
        height: '100%',
        width: "100%",  
      // Enables scrolling on smaller screens
      }}
    >
    <div className="flex justify-center items-center md:items-start flex-col w-full h-full p-4 bg-[#202B3C] rounded-lg text-white">
            <Typography variant="h6" color="#787F89" sx={{ fontWeight: 'bold', pb: 2 }}>
        <strong>TODAY&apos;S FORECAST</strong>
      </Typography>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 w-full">
          {forecast.map((hour, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-2 bg-[#293648] border border-[#787F89] rounded-lg text-center h-36">
              <Typography variant="body2" color="#787F89"><strong>{time[index]}</strong></Typography>
              <img src={hour.condition.icon} alt="weather icon" className="w-12 h-12" />
              <Typography variant="body2"><strong>{hour.temp_c}°C</strong></Typography>
            </div>
          ))}
        </div>
      </div>
    </div>

    </Card>
  );
};

export default ForecastCard;
