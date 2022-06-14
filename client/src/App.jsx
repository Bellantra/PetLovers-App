import NavBar from './components/NavBar/NavBar'
import Home from './views/Home'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import Adoptions from './views/Adoptions'
import Shelter from './views/Shelter'
import { Routes, Route } from 'react-router-dom'
import Footer from '../src/components/Footer/Footer'
import Profile from './views/Profile'
import Login from './components/Login/Login'
import AdminShelter from './views/AdminShelter'
import Register from './views/Register'
import { useEffect } from 'react'
import isUserLogged from './utils/isUserLogged'
import { useDispatch } from 'react-redux'
import { getUserInfo } from './redux/asyncActions/user/getUserInfo'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (isUserLogged()) {
            dispatch(getUserInfo())
        }
    }, [])
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/adoptions" element={<Adoptions />} />
                <Route
                    path="/underConstruction"
                    element={<UnderConstruction />}
                />
                <Route path="/shelter/:id" element={<Shelter />} />
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/admin" element={<AdminShelter />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App
