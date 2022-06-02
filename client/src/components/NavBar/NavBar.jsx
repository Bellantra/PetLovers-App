import { useState } from 'react'
import { useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Avatar, Divider, ListItemIcon } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import LogoutIcon from '@mui/icons-material/Logout'
import logo from '../../assets/logo.png'
import '../../styles/Home.css'
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const NavBar = () => {
    const { isAuthenticated, user, loginWithRedirect, logout, isLoading } =
        useAuth0()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)
    const openMenu = Boolean(anchorEl)
    const openMenuUser = Boolean(anchorElUser)
    const shelterItems = useSelector((state) => state.shelter.shelters)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (event) => {
        setAnchorEl(null)
    }

    const handleShelters = (event) => {
        const sh = shelterItems.filter(
            (el) => el.name === event.target.innerText
        )
        console.log(sh[0]._id)
        handleClose()
        navigate(`/shelter/${sh[0]._id}`)
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position="static" className="navContainer">
            <Container maxWidth="xl" className="navContainer">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    />
                    <LinkRouter to={'/home'}>
                        <img src={logo} alt="logo" className="imageLogo" />
                    </LinkRouter>

                    <AdbIcon
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    />
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
                            color: '#515151',
                            textDecoration: 'none',
                        }}
                    >
                        Pet Lovers
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Button
                            onClick={handleClick}
                            sx={{ my: 2, color: '#515151', display: 'block' }}
                            // aria-control={openMenu ? 'sheltersMenu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                        >
                            Shelters
                        </Button>
                        <Menu
                            id="sheltersMenu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleClose}
                        >
                            {shelterItems.length &&
                                shelterItems.map((el, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleShelters}
                                    >
                                        {el.name}
                                    </MenuItem>
                                ))}
                        </Menu>
                        <Button
                            sx={{ my: 2, color: '#515151', display: 'block' }}
                        >
                            <LinkRouter
                                to={'/Adoptions'}
                                className="navButtons"
                            >
                                Adoptions
                            </LinkRouter>
                        </Button>
                        <Button
                            sx={{ my: 2, color: '#515151', display: 'block' }}
                        ></Button>
                    </Box>

                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                        }}
                    >
                        {isAuthenticated && !isLoading ? (
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    sx={{ marginLeft: 'auto' }}
                                    src={user?.picture}
                                    to="/profile"
                                    component={LinkRouter}
                                />

                                <MenuIcon
                                    onClick={handleOpenUserMenu}
                                    color="primary"
                                    fontSize="large"
                                    sx={{ marginLeft: '10px' }}
                                    // aria-controls={
                                    //     openMenuUser
                                    //         ? 'account-menu'
                                    //         : undefined
                                    // }
                                    aria-haspopup="true"
                                    aria-expanded={
                                        openMenuUser ? 'true' : undefined
                                    }
                                />
                            </Box>
                        ) : (
                            <Button
                                variant="contained"
                                className="buttonLogIn"
                                style={{ width: '120px', padding: '5px 10px' }}
                                onClick={loginWithRedirect}
                            >
                                Login
                            </Button>
                        )}
                    </Box>
                    <Menu
                        anchorEl={anchorElUser}
                        id="account-menu"
                        open={openMenuUser}
                        onClose={handleCloseUserMenu}
                        onClick={handleCloseUserMenu}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: 'right',
                            vertical: 'top',
                        }}
                        anchorOrigin={{
                            horizontal: 'right',
                            vertical: 'bottom',
                        }}
                    >
                        <MenuItem to="/profile" component={LinkRouter}>
                            <Avatar src={user?.picture} /> {user?.name}
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={logout}>
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Log out
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
