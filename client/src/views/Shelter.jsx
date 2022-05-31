import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Typography, Container, Divider, Grid } from '@mui/material'

import Carousel from 'react-material-ui-carousel'
import {
    getShelterById,
    cleanDetail,
} from '../redux/features/shelter/shelterSlice'
import { Paginations } from '../components/Home/Paginations'
import products from '../utils/products.json'
import AdoptCard from '../components/AdoptCard'

const img = [
    'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/temas/albergue_animales_jpg.webp',
    'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/articulos/objetivos-albergue-animales_jpg.webp',
    'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/articulos/protocolo-admision-albergue-animales_jpg.webp',
    'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/articulos/dia-a-dia-albergue-animales_jpg.webp',
]

const Shelter = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { shelterDetail, statusDetail } = useSelector(
        (state) => state.shelter
    )

    useEffect(() => {
        dispatch(getShelterById(id))
        return () => dispatch(cleanDetail())
    }, [dispatch, id])

    // console.log(shelterDetail)

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
                        marginBottom={10}
                    >
                        {shelterDetail.description}
                    </Typography>

                    <Container maxWidth="md" align={'center'}>
                        <Carousel>
                            {img.map((pic, index) => (
                                <img
                                    key={index}
                                    src={pic}
                                    alt="refugio pic"
                                    width="700px"
                                />
                            ))}
                        </Carousel>
                    </Container>

                    <Typography
                        marginTop={5}
                        variant="h3"
                        align="center"
                        color="text.primary"
                        marginBottom={10}
                    >
                        Nuestros animales en Adopcion
                    </Typography>
                    <Grid
                        container
                        marginBottom={25}
                        spacing={4}
                        justifyContent={'center'}
                    >
                        {/* <Carousel> */}
                        {shelterDetail.petsAdoption.map((pet, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <AdoptCard
                                    pet={pet}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                ></AdoptCard>
                                {/* <Card
                                        sx={{
                                            maxWidth: 345,
                                            height: 450,
                                        }}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                component={'img'}
                                                height="140"
                                                image={image[0]}
                                                alt={nickname}
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
                                                    group of squamate reptiles,
                                                    with over 6,000 species,
                                                    ranging across all
                                                    continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card> */}
                            </Grid>
                        ))}
                        {/* </Carousel> */}
                    </Grid>
                    <Grid align={'center'}>
                        <Typography
                            marginTop={5}
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Nuestros Productos
                        </Typography>

                        <Paginations
                            array={products}
                            arrayType="products"
                            petPerPage={Number('10')}
                        />
                    </Grid>
                </Container>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default Shelter
