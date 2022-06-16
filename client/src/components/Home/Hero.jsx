import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import imgHero from '../../assets/img-home.png'
import img from '../../assets/patitas.png'

import { Link as LinkRouter } from 'react-router-dom'

import Typography from '@mui/material/node/Typography'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

const Hero = () => {
    return (
        <Grid
            container
            justifyContent="space-evenly"
            display={'flex'}
            alignItems={'center'}
            style={{ backgroundImage: `url(${img})` }}
        >
            <Grid
                item
                md={6}
                xs={12}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                maxWidth={'96%'}
                textAlign={'center'}
                marginTop={'2rem'}
            >
                <Grid item xs={12} marginBottom={'2rem'} marginTop={'2rem'}>
                    <Typography
                        style={{
                            marginBottom: '2rem',
                            color: '#1363DF',
                            fontSize: '7rem',
                            fontWeight: '800',
                            lineHeight: '7rem',
                        }}
                    >
                        WE CARE
                    </Typography>
                    <Typography
                        style={{
                            marginBottom: '4rem',
                            fontSize: '6rem',
                            fontWeight: '300',
                            lineHeight: '6rem',
                            boxSizing: 'border-box',
                        }}
                    >
                        About Pets
                    </Typography>
                    <Typography
                        style={{
                            marginBottom: '2rem',
                            marginLeft: '3rem',
                            marginRight: '3rem',
                        }}
                    >
                        We are a website that seeks to provide a place for all
                        shelters and organizations dedicated to animal help. Our
                        associated shelters have their personal space to publish
                        their pets for adoption and products they have for sale
                        to cover their expenses. They can also post the
                        donations they need. If you need a space for your
                        refuge, here you can find a place to have it. People can
                        find rescued animals for adoption in good health,
                        waiting for that dream family.
                    </Typography>
                    <LinkRouter to={'/Adoptions'}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Adopt Now
                        </Button>
                    </LinkRouter>
                </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
                <img src={imgHero} alt="various-pets" width={'100%'}></img>
            </Grid>
        </Grid>
    )
}
export default Hero
