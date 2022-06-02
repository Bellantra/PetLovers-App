import { useEffect, useState } from 'react'
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
import AdoptCard from '../components/Adoptions/AdoptCard'
import Pagination from '../components/Pagination/Pagination'

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

    // ----------   PAGINADO------------
    const perPage = 3
    const [currentPage, setCurrentPage] = useState(1)
    const count = Math.ceil(shelterDetail.petsAdoption?.length / perPage)

    const leftLimit = currentPage * perPage - perPage
    const rightLimit = leftLimit + perPage

    const data = shelterDetail.petsAdoption?.slice(leftLimit, rightLimit)
    // -----------FIN PAGINADO----------------

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
                    <Grid
                        container
                        marginBottom={5}
                        spacing={4}
                        justifyContent={'center'}
                    >
                        {data.map((pet, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <AdoptCard
                                    pet={pet}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                ></AdoptCard>
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
