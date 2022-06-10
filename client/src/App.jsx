import NavBar from './components/NavBar/NavBar'
import Home from './views/Home'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import Adoptions from './views/Adoptions'
import Shelter from './views/Shelter'
import { Routes, Route } from 'react-router-dom'
import Footer from '../src/components/Footer/Footer'
import Profile from './views/Profile'
import { ProductForm } from './components/Products/ProductForm.jsx'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import AdminShelter from './views/AdminShelter'
import Register from './views/Register'

const App = () => {
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
                <Route path="/products" element={<ProductForm />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/admin" element={<AdminShelter />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App
