import NavBar from './components/NavBar'
import Home from './views/Home'
import UnderConstruction from './components/UnderConstruction'
import Adoptions from './views/Adoptions'
import Shelter from './views/Shelter'
import { Routes, Route } from 'react-router-dom'
import Footer from '../src/components/Footer'

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
            </Routes>
            <Footer />
        </>
    )
}

export default App
