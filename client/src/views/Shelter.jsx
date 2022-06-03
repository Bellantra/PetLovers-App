import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Typography, Container, Divider, Grid } from '@mui/material'

import Carousel from 'react-material-ui-carousel'
import {
    getShelterById,
    cleanDetail,
} from '../redux/features/shelter/shelterSlice'

import { getAllProducts } from '../redux/asyncActions/product/getAllProducts'
import PaginateArray from '../components/PaginateArray/PaginateArray'
import Loading from '../components/Loading/Loading'

const Shelter = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { shelterDetail, statusDetail } = useSelector(
        (state) => state.shelter
    )

    const prod = useSelector((state) => state.product.products)

    useEffect(() => {
        dispatch(getShelterById(id))
        return () => dispatch(cleanDetail())
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getAllProducts())
        return () => dispatch(cleanDetail())
    }, [dispatch])

    const shelterProducts = prod.filter((el) => el.shelter._id === id)

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
                        marginTop={15}
                        variant="h3"
                        align="center"
                        color="text.primary"
                        marginBottom={10}
                    >
                        Nuestros animales en Adopción
                    </Typography>

                    <PaginateArray
                        arrayType={'pet'}
                        arrayData={shelterDetail.petsAdoption}
                        itemsPerPage={3}
                    />
                    <Grid align={'center'}>
                        {shelterProducts.length > 0 && (
                            <>
                                <Typography
                                    marginTop={5}
                                    variant="h3"
                                    align="center"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    Nuestros Productos
                                </Typography>
                                <PaginateArray
                                    arrayType="products"
                                    arrayData={shelterProducts}
                                    itemsPerPage={6}
                                    md={4}
                                    cardSize={'lg'}
                                />
                            </>
                        )}
                    </Grid>
                </Container>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Shelter
