import * as React from 'react';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.png'
import '../styles/Home.css'
import {Link as LinkRouter, useNavigate} from "react-router-dom";

const pages = ['Shelters', 'Adoptions', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const shelterItems = useSelector(state=>state.shelter.shelters);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

const handleClose = (event) => {
    setAnchorEl(null);
  };
  
  const handleShelters = (event) => {
    const sh=shelterItems.filter(el=>el.name === event.target.innerText);
    console.log(sh[0]._id);
    handleClose();
    navigate(`/shelter/${sh[0]._id}`);

  };

  

  const handleOpenUserMenu = (event) => {
  //  setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
  //  setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    //setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='navContainer'>
      <Container maxWidth="xl" className='navContainer'>
        <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <LinkRouter to={"/home"}><img src={logo} alt='logo' className='imageLogo'/></LinkRouter>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:'#515151',
              textDecoration: 'none',
            }}
          >
            Pet Lovers
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={handleClick}
                  sx={{ my: 2, color:'#515151', display: 'block' }}
                  aria-control ={openMenu? 'sheltersMenu' : undefined }
                  aria-haspopup = 'true'
                  aria-expanded = {openMenu? 'true' : undefined }
                >
                  {//<LinkRouter to={"/underConstruction"} className='navButtons'>Shelters</LinkRouter>
                  }Shelters
                </Button>
                <Menu id='sheltersMenu'
                anchorEl={anchorEl}
                open= {openMenu}
                onClose={handleClose}>
                  {shelterItems.length&&shelterItems.map((el,index)=>(
                      <MenuItem
                       key={index}
                       onClick={handleShelters} >{el.name}</MenuItem>
                  ))
                  
                  }
                </Menu>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color:'#515151', display: 'block' }}
                >
                  <LinkRouter to={"/underConstruction"} className='navButtons'>Adoptions</LinkRouter>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color:'#515151', display: 'block' }}
                >
                  <LinkRouter to={"/underConstruction"} className='navButtons'>About Us</LinkRouter>
                </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Button variant="contained" className='buttonLogIn'>Log In</Button>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;