import Button from '@mui/material/Button';
import imgHero from '../../assets/img-home.png'
import SendIcon from '@mui/icons-material/Send';
import dogPaw from '../../assets/dogpaw1.png'
import dogPaw2 from '../../assets/dogpaw2.png'
import dogPaw3 from '../../assets/dogpaw3.png'
import dogPaw4 from '../../assets/dogpaw4.png'
import dogPaw5 from '../../assets/dogpaw5.png'
import {
DivHero,
TextHero,
DivImgHero, 
ImageHero,
WeCare,
AboutPets,
ParagraphHero,
DivButtonAdopt,
ImageDogPaw1,
ImageDogPaw2,
ImageDogPaw3,
ImageDogPaw4,
ImageDogPaw5
 } from "./HomeStyle";
 import { Link as LinkRouter } from 'react-router-dom'

const Hero = () => {
    return(
        <DivHero>
        <TextHero>
            <ImageDogPaw1 src={dogPaw} alt='dog-paw'/>
            <ImageDogPaw2 src={dogPaw2} alt='dog-paw'/>
            <WeCare>WE CARE</WeCare>
            <AboutPets>About Pets</AboutPets>
            <ParagraphHero>Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish.</ParagraphHero>
            <DivButtonAdopt>
            <LinkRouter to={"/Adoptions"} className="notUnderlined">
            <Button variant="contained" endIcon={<SendIcon />}
            sx={{backgroundColor: "#1565C0 !important",
                boxShadow:  "2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12) !important",
                borderRadius: "4px !important"}}
            >Adopt Now</Button>
            </LinkRouter>
            </DivButtonAdopt>
            <ImageDogPaw3 src={dogPaw3} alt='dog-paw'/>
            <ImageDogPaw4 src={dogPaw4} alt='dog-paw'/>
            <ImageDogPaw5 src={dogPaw5} alt='dog-paw'/>
        </TextHero>
        <DivImgHero>
            <ImageHero src={imgHero} alt='various-pets'/>
        </DivImgHero>
        </DivHero>
    )
}
export default Hero;