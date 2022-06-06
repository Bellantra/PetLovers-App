import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'

import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Divider } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

import logo from '../../assets/logo.png'
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import '../../App.css'
import { getAllShelters } from '../../redux/asyncActions/shelter/getAllShelters'
import Loading from '../Loading/Loading'
import UserMenu from '../NavBar/UserMenu'

const NavBar = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, user, loginWithRedirect, logout, isLoading } =
        useAuth0()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    // const [anchorElUser, setAnchorElUser] = useState(null)
    const openMenu = Boolean(anchorEl)
    // const openMenuUser = Boolean(anchorElUser)

    const { shelters, status } = useSelector((state) => state.shelter)
    useEffect(() => {
        if (status !== 'success') dispatch(getAllShelters())
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleShelters = (event) => {
        const sh = shelters.filter((el) => el.name === event.target.innerText)
        handleClose()
        navigate(`/shelter/${sh[0]._id}`)
    }

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white !important',
                boxShadow: 'none !important',
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    backgroundColor: 'white !important',
                    boxShadow: 'none !important',
                }}
            >
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
                        marginX={5}
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
                            {status === 'success' ? (
                                shelters.map((el, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleShelters}
                                    >
                                        {el.name}
                                    </MenuItem>
                                ))
                            ) : (
                                <Loading size={30} margin={'1px 30px'} />
                            )}
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
                    </Box>

                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                        }}
                    >
                        {isAuthenticated && !isLoading ? (
                            <UserMenu
                                img={user?.picture}
                                logout={logout}
                            ></UserMenu>
                        ) : (
                            <Button
                                variant="contained"
                                style={{
                                    width: '120px',
                                    padding: '5px 10px',
                                    backgroundColor: '#1565C0 !important',
                                    boxShadow:
                                        '2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12) !important',
                                    borderRadius: '4px !important',
                                }}
                                onClick={loginWithRedirect}
                            >
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
            <Divider></Divider>
        </AppBar>
    )
}

export default NavBar
