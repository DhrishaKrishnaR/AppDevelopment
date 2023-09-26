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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../../../redux/userSlice';

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("User:",user);
  const username = user.user && user.user.username ? user.user.username : "Guest";
  const navigate = useNavigate();  
  console.log({username});
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
  const handleresumeClick = () => {
    navigate('/resume');
    toggleDrawer(false);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleContact = () => {
    navigate('/contact');
    toggleDrawer(false);
  };
  const handlePolicy = () => {
    navigate('/policy');
    toggleDrawer(false);
  };
  
  const handleProfile = () => {
    navigate('/profile');
    toggleDrawer(false);
  };
  const handleAbout = () => {
    navigate('/about');
    toggleDrawer(false);
  };
  const handleTerms = () => {
    navigate('/terms');
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
          <Button color="inherit" href="/" style={{ fontSize: '20px' }}>JOB PLAZA</Button>
          </Typography>
          
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signup">SignUp</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
          <center>Welcome Back!<br/>{username}!
          </center>
         
            <ListItem button onClick={handleProfile}>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={handleAbout}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={handlejobClick}>
              <ListItemText primary="Find Jobs" />
            </ListItem>
            <ListItem button onClick={handleresumeClick}>
              <ListItemText primary="Resume Builder" />
            </ListItem>
            
            <ListItem button onClick={handleContact}>
              <ListItemText primary="Contact Us" />
            </ListItem>
            <ListItem button onClick={handlePolicy}>
              <ListItemText primary="Privacy and Policy" />
            </ListItem>
            <ListItem button onClick={handleTerms}>
              <ListItemText primary="Terms and Conditions" />
            </ListItem>
            <ListItem button onClick={handleLogout} >
              <ListItemText primary="LogOut" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
