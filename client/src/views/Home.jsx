/* import React from 'react'; */
import AboutUs from '../components/Home/AboutUs'
import Hero from '../components/Home/Hero'
import Footer from '../components/Footer'
import Carrousel from '../components/Home/Carrousel';
import Shelters from '../components/Home/Shelters'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs/>
            <Carrousel/>
            <Shelters />
            <Footer />
        </>
    )
}
export default Home
