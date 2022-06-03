import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Typography, Container, Divider, Grid, Pagination } from '@mui/material'

import Carousel from 'react-material-ui-carousel'
import {
    getShelterById,
    cleanDetail,
} from '../redux/features/shelter/shelterSlice'
import { Products } from '../components/Products/Products'
import InfoCard from '../components/InfoCard/InfoCard'
import { getAllProducts } from '../redux/asyncActions/product/getAllProducts'

const Shelter = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { shelterDetail, statusDetail } = useSelector(
        (state) => state.shelter
    )

    const prod = useSelector((state) => state.product.products)
    console.log(prod)

    useEffect(() => {
        dispatch(getShelterById(id))
        return () => dispatch(cleanDetail())
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getAllProducts())
        return () => dispatch(cleanDetail())
    }, [dispatch])

    // ----------   PAGINADO------------
    const perPage = 3
    const [currentPage, setCurrentPage] = useState(1)
    const count = Math.ceil(shelterDetail.petsAdoption?.length / perPage)

    const leftLimit = currentPage * perPage - perPage
    const rightLimit = leftLimit + perPage

    const data = shelterDetail.petsAdoption?.slice(leftLimit, rightLimit)
    // -----------FIN PAGINADO----------------
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
                        Nuestros animales en Adopcion
                    </Typography>
                    <Grid container marginBottom={5} spacing={4}>
                        {data.map((pet) => (
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
                    <Grid container justifyContent={'center'}>
                        <Pagination
                            count={count}
                            page={currentPage}
                            setPage={setCurrentPage}
                            color="primary"
                        ></Pagination>
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

                        {shelterProducts.length > 0 && (
                            <Products
                                array={shelterProducts}
                                arrayType="products"
                                petPerPage={Number('10')}
                            />
                        )}
                    </Grid>
                </Container>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default Shelter
