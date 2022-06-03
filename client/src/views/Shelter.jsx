import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Typography, Container, Divider, Grid } from '@mui/material'

import Carousel from 'react-material-ui-carousel'
import {
    getShelterById,
    cleanDetail,
} from '../redux/features/shelter/shelterSlice'
import { Products } from '../components/Products/Products'
import products from '../utils/products.json'
import InfoCard from '../components/InfoCard/InfoCard'

// const img = [
//     'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/temas/albergue_animales_jpg.webp',
//     'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/articulos/objetivos-albergue-animales_jpg.webp',
//     'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/articulos/protocolo-admision-albergue-animales_jpg.webp',
//     'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small__webp/public/articulos/dia-a-dia-albergue-animales_jpg.webp',
// ]

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
                        <Carousel height="500px">
                            {shelterDetail.img.map((pic, index) => (
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
                    <Grid container marginBottom={25} spacing={4}>
                        {shelterDetail.petsAdoption.map((pet) => (
                            <Grid item key={pet._id} xs={12} sm={6} md={3}>
                                <InfoCard
                                    item={pet}
                                    type={'pet'}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                ></InfoCard>
                            </Grid>
                        ))}
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

                        <Products
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
