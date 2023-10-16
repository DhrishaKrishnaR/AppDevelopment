import * as React from 'react';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../../../redux/userSlice';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge'; // Import Badge component

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : "Guest";
  const navigate = useNavigate();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };
  
  const isLoggedIn = user.user && user.user.username;

  const [notificationsAnchorEl, setNotificationsAnchorEl] = React.useState(null);

  const [notificationsCount, setNotificationsCount] = React.useState(4); 

  const handlejobClick = () => {
    navigate('/job');
    toggleDrawer(false);
  };

  const handlepostClick = () => {
    navigate('/jobform');
    toggleDrawer(false);
  };

  const handleresumeClick = () => {
    navigate('/resume');
    toggleDrawer(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  const handleContact = () => {
    navigate('/contact');
    toggleDrawer(false);
  };
  const handleManage = () => {
    navigate('/appliedjobs');
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

 

  const openNotificationsMenu = (event) => {
    setNotificationsCount(0); 
    setNotificationsAnchorEl(event.currentTarget);
  };

  const closeNotificationsMenu = () => {
    setNotificationsAnchorEl(null);
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
            <Button color="inherit" href="/" style={{ fontSize: '20px' }}>
              JOB PLAZA
            </Button>
          </Typography>

          {/* Add the Badge component with notificationsCount */}
          <IconButton
            aria-label="notifications"
            color="inherit"
            onClick={openNotificationsMenu}
          >
            <Badge badgeContent={notificationsCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" href="/login">
                Login
              </Button>
              <Button color="inherit" href="/signup">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
            <center>
              Welcome Back!<br />
              {username}!
            </center>

            <ListItem button onClick={handleProfile}>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={handleAbout}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={handlepostClick}>
              <ListItemText primary="Post Jobs" />
            </ListItem>
            <ListItem button onClick={handlejobClick}>
              <ListItemText primary="Find Jobs" />
            </ListItem>
            <ListItem button onClick={handleManage}>
              <ListItemText primary="Manage Jobs" />
            </ListItem>
            <ListItem button onClick={handleresumeClick}>
              <ListItemText primary="Resume Builder" />
            </ListItem>
            <ListItem button onClick={handleContact}>
              <ListItemText primary="Contact Us" />
            </ListItem>
            
          </List>

        </div>
      </Drawer>
      <Menu
        anchorEl={notificationsAnchorEl}
        open={Boolean(notificationsAnchorEl)}
        onClose={closeNotificationsMenu}
      >
        {/* Your notification content goes here */}
        <MenuItem onClick={closeNotificationsMenu} sx={{
          backgroundColor: '#f0f0f0',
          padding: '10px',
          borderBottom: '1px solid #ccc',
          fontSize: '16px',
          lineHeight: 1.5,
        }}>
        Reminder: Complete your <a href="/resume">&nbsp; resume</a> &nbsp;to improve job matches.
        <span>1 day ago</span>
        </MenuItem>
        <MenuItem onClick={closeNotificationsMenu} sx={{
          backgroundColor: '#f0f0f0',
          padding: '14px',
          borderBottom: '1px solid #ccc',
          fontSize: '16px',
          lineHeight: 1.5,
        }}>
    <div className="noty-manager-list-item noty-manager-list-item-error">
      <div className="activity-item">
        <i className="fa fa-briefcase text-info"></i>
        <div className="activity">
          New job listing: <a href="/job">Frontend Developer &nbsp;</a>{' '}
          <span>30 minutes ago</span>
        </div>
      </div>
    </div>
  </MenuItem>
  <MenuItem onClick={closeNotificationsMenu} sx={{
    backgroundColor: '#f0f0f0',
    padding: '14px',
    borderBottom: '1px solid #ccc',
    fontSize: '16px',
    lineHeight: 1.5,
  }}>
  <div className="noty-manager-list-item noty-manager-list-item-error">
    <div className="activity-item">
      <i className="fa fa-briefcase text-info"></i>
      <div className="activity">
        New job listing: <a href="/job">UX Designer &nbsp; </a>{' '}
        <span>1 hour ago</span>
      </div>
    </div>
  </div>
</MenuItem>
<MenuItem onClick={closeNotificationsMenu} sx={{
  backgroundColor: '#f0f0f0',
  padding: '14px',
  borderBottom: '1px solid #ccc',
  fontSize: '16px',
  lineHeight: 1.5,
}}>
  <div className="noty-manager-list-item noty-manager-list-item-error">
    <div className="activity-item">
      <i className="fa fa-briefcase text-info"></i>
      <div className="activity">
        Exciting opportunity: <a href="/job">AI Chatbot Developer &nbsp;</a>{' '}
        <span>2 days ago</span>
      </div>
    </div>
  </div>
</MenuItem>
      </Menu>
    </Box>
  );
}
