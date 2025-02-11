import React from 'react';
import { Card, Typography, useTheme } from '@mui/material';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';

const AirConditionCard = ({ weather, chanceOfRain }) => {
  const airConditions = [
    { icon: <AirOutlinedIcon sx={{ color: '#787F89' }} />, label: 'Wind Speed', value: `${weather.current.wind_kph} kph` },
    { icon: <DeviceThermostatOutlinedIcon sx={{ color: '#787F89' }} />, label: 'Real Feel', value: `${weather.current.feelslike_c}°C` },
    { icon: <WaterDropOutlinedIcon sx={{ color: '#787F89' }} />, label: 'Chance of Rain', value: `${chanceOfRain}%` },
    { icon: <Brightness5OutlinedIcon sx={{ color: '#787F89' }} />, label: 'UV Index', value: weather.current.uv }
  ];

  const theme = useTheme();

  return (
    <Card variant="elevation" sx={{ backgroundColor:  "#202B3C" , color: 'white', display: 'flex' , flexDirection: 'column', justifyContent: 'space-between', p:2, borderRadius: '10px',         width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "45%",
        }, }}>
      <div>
        <Typography variant="h6" color="#787F89" sx={{ fontWeight: 'bold' }}>
          AIR CONDITIONS
        </Typography>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {airConditions.map((condition, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex gap-2">
              {condition.icon}
              <p className='text-[#787F89] font-bold'>{condition.label}:</p>
            </div>
            <p className='pl-9 font-semibold'>{condition.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AirConditionCard;
