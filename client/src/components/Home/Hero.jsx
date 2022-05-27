/* import React from 'react'; */
import Button from '@mui/material/Button';
import imgHero from '../../assets/img-home.png'
import SendIcon from '@mui/icons-material/Send';
import dogPaw from '../../assets/dogpaw1.png'
import dogPaw2 from '../../assets/dogpaw2.png'
import dogPaw3 from '../../assets/dogpaw3.png'
import dogPaw4 from '../../assets/dogpaw4.png'
import dogPaw5 from '../../assets/dogpaw5.png'

const Hero = () => {
    return(
        <div className='hero'>
        <div className='textHero'>
            <img src={dogPaw} alt='dog-paw' className='imageDogPaw1'/>
            <img src={dogPaw2} alt='dog-paw' className='imageDogPaw2'/>
            <h2 className='weCare'>WE CARE</h2>
            <h2 className='aboutPets'>About Pets</h2>
            <p className='paragraphHero'>Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish.</p>
            <div className='divButtonAdopt'>
            <Button variant="contained" className='buttonAdoptNow' endIcon={<SendIcon />}>Adopt Now</Button>
            </div>
            <img src={dogPaw3} alt='dog-paw' className='imageDogPaw3'/>
            <img src={dogPaw4} alt='dog-paw' className='imageDogPaw4'/>
            <img src={dogPaw5} alt='dog-paw' className='imageDogPaw5'/>
        </div>
        <div className='divImgHero'>
            <img src={imgHero} alt='various-pets' className='imageHero'/>
            </div>
        </div>
    )
}
export default Hero;