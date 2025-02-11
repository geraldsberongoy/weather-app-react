import { Box, Button, Divider, Typography } from "@mui/material";
import { Cloud, Home, Info } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box variant="permanent" sx={{ margin: 1, p:1, bgcolor: "#202B3C", display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px' }}>
      <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', '&:hover': { bgcolor: '#3a4a5c' }, '&.Mui-active': { bgcolor: '#1a2a3c' } }}>
        <Home />
        <Typography variant="body2" sx={{ textTransform: 'none' }}>Home</Typography>
      </Button>
      <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', '&:hover': { bgcolor: '#3a4a5c' }, '&.Mui-active': { bgcolor: '#1a2a3c' } }}>
        <Cloud />
        <Typography variant="body2" sx={{ textTransform: 'none' }}>Weather</Typography>
      </Button>
      <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', '&:hover': { bgcolor: '#3a4a5c' }, '&.Mui-active': { bgcolor: '#1a2a3c' } }}>
        <Info />
        <Typography variant="body2" sx={{ textTransform: 'none' }}>About</Typography>
      </Button>
      <Divider />
    </Box>
  );
};

export default Sidebar;
