import * as React from 'react';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const userEmail = useSelector((state) => state.user.email);
  const navigate = useNavigate();  
  console.log(userEmail);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const handlejobClick = () => {
    navigate('/job');
    toggleDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Lucida Console' }}>
            JOB SEARCHING PORTAL
          </Typography>
          {userEmail && (
            <Typography variant="body2" sx={{ marginRight: '10px' }}>
              Welcome Back, {userEmail.toString()} 
            </Typography>)}
          <Button color="inherit"><a href="/login">Login</a></Button>
          <Button color="inherit"><a href="/signup">SignUp</a></Button>
          <Button color="inherit"><a href="#aboutme" className="smooth-scroll">About</a></Button>
          <Button color="inherit"><a href="#footer" className="smooth-scroll">Contact US</a></Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
          <center>Welcome Back!
          </center>
         
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={handlejobClick}>
              <ListItemText primary="Find Jobs" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Resume Builder" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Application Tracker" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Alerts and Notifications" />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Privacy and Security" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
