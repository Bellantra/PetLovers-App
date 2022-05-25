import NavBar from "./components/NavBar"
import Home from "./views/Home"
import UnderConstruction from "./components/UnderConstruction";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/underConstruction' element={<UnderConstruction/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

