import React from 'react';
import { InputBase, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ inputCity, handleCityChange, handleCitySubmit }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCitySubmit();
    }
  };

  return (
    <div className="bg-[#202B3C] p-1 pl-3 rounded-xl border border-[#202B3C] mb-4 flex items-center w-full lg:w-1/2">
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white' }}
        placeholder="Search City..."
        inputProps={{ 'aria-label': 'search city' }}
        value={inputCity}
        onChange={handleCityChange}
        onKeyDown={handleKeyDown} 
      />
      <Button onClick={handleCitySubmit}>
        <Search sx={{ color: 'white' }} />
      </Button>
    </div>
  );
};

export default SearchBar;