/* import React from 'react'; */
import Button from '@mui/material/Button';
import imgHero from '../../assets/img-home.png'
import SendIcon from '@mui/icons-material/Send';

const Hero = () => {
    return(
        <div className='hero'>
        <div className='textHero'>
            <h2>WE CARE</h2>
            <h2>About Pets</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button variant="contained" endIcon={<SendIcon />}>Adopt Now</Button>
        </div>
            <img src={imgHero} alt='various-pets'/>
        </div>
    )
}
export default Hero;