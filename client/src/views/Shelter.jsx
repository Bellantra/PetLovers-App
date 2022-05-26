import { useEffect, useState } from 'react'
import { Typography, Container, Divider, Grid } from '@mui/material'
import { Carousel, CarouselSlide } from 'react-material-ui-carousel'

const Shelter = () => {
    const [shelter, setShelter] = useState()

    const getShelter = () => {
        fetch('./src/utils/shelter.json')
            .then((response) => response.json())
            .then((data) => setShelter(data))
    }

    useEffect(() => {
        getShelter()
    }, [])

    console.log(shelter)
    console.log('object aaaaaaaaa')

    return (
        <div>
            {shelter ? (
                <Container>
                    <Typography
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Refugio {shelter[0].name}{' '}
                    </Typography>
                    <Divider variant="middle"></Divider>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        width={'75%'}
                        margin={'auto'}
                        marginTop={5}
                        gutterBottom
                    >
                        {shelter[0].description}
                    </Typography>

                    <Typography
                        marginTop={5}
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Nuestros animales en Adopcion
                    </Typography>
                    {/* <Grid>Carrusel de cards de animales en adopcion</Grid> */}
                </Container>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default Shelter
