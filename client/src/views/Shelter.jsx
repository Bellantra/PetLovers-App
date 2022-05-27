import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {
    CardActionArea,
    Typography,
    Container,
    Divider,
    Grid,
} from '@mui/material'

import Carousel from 'react-material-ui-carousel'
import { getShelterById } from '../redux/features/shelter/shelterSlice'

const Shelter = () => {
    const id = '628ef0b4fc13ae3528000033' // harcodeado por ahora!!!
    const dispatch = useDispatch()
    const { shelterDetail, statusDetail } = useSelector(
        (state) => state.shelter
    )

    useEffect(() => {
        if (!shelterDetail.name) dispatch(getShelterById(id))
    }, [])

    console.log(shelterDetail)

    return (
        <div>
            {statusDetail === 'success' ? (
                <Container>
                    <Typography
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Refugio {shelterDetail.name}{' '}
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
                        {shelterDetail.description}
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
                    <Grid marginBottom={25}>
                        <Carousel>
                            {shelterDetail.petsAdoption.map(
                                ({ nickname, image, key }) => (
                                    <Grid key={key} align={'center'}>
                                        <Card
                                            sx={{
                                                maxWidth: 345,
                                                height: 450,
                                            }}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component={'img'}
                                                    height="140"
                                                    image={image}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                    >
                                                        {nickname}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        Lizards are a widespread
                                                        group of squamate
                                                        reptiles, with over
                                                        6,000 species, ranging
                                                        across all continents
                                                        except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            )}
                        </Carousel>
                    </Grid>
                </Container>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default Shelter
