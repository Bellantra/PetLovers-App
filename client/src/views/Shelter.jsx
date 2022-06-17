import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Typography, Container, Grid } from '@mui/material'

import Carousel from '../components/Carousel/Carousel'
import {
    getShelterById,
    cleanDetail,
} from '../redux/features/shelter/shelterSlice'

import { getAllProducts } from '../redux/asyncActions/product/getAllProducts'
import PaginateArray from '../components/PaginateArray/PaginateArray'
import Loading from '../components/Loading/Loading'
import { getPetById, cleanPetDetail } from '../redux/features/adopt/adoptSlice'
import ProductModal from '../components/Products/ProductModal'
import PetModal from '../components/Pet/PetModal'

const Shelter = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { shelterDetail, statusDetail } = useSelector(
        (state) => state.shelter
    )

    const [modalState, setModalState] = useState(false)

    const buttonOne = (id) => {
        if (id) dispatch(getPetById(id))
        else dispatch(cleanPetDetail())
        setModalState(!modalState)
    }

    const petsActive = shelterDetail.petsAdoption?.filter(
        (pet) => pet.status === 'Active'
    )

    const prod = useSelector((state) => state.product.products)

    useEffect(() => {
        dispatch(getShelterById(id))
        return () => dispatch(cleanDetail())
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const shelterProducts = prod?.filter((el) => el.shelter._id === id)

    return (
        <>
            {statusDetail === 'success' ? (
                <Container>
                    <Grid
                        container
                        justifyContent={'center'}
                        alignContent={'center'}
                        marginY={5}
                    >
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'center'}
                            alignContent={'center'}
                            marginRight={4}
                        >
                            <img src={shelterDetail.logo} width={'100px'}></img>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="h3"
                                align="center"
                                color="text.primary"
                                marginTop={5}
                                gutterBottom
                            >
                                {shelterDetail.name}{' '}
                            </Typography>
                        </Grid>
                    </Grid>

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

                    <Container>
                        <Grid marginBottom={15}>
                            <Carousel
                                width="100vw"
                                images={shelterDetail.img}
                            ></Carousel>
                        </Grid>
                    </Container>

                    {petsActive?.length > 0 && (
                        <>
                            <Typography
                                variant="h3"
                                align="center"
                                color="text.primary"
                                marginBottom={10}
                            >
                                Our Pets in Adoption
                            </Typography>

                            <PaginateArray
                                arrayType={'pet'}
                                arrayData={petsActive}
                                itemsPerPage={6}
                                buttonOne={buttonOne}
                            />
                        </>
                    )}

                    <Grid align={'center'}>
                        {shelterProducts?.length > 0 && (
                            <>
                                <Typography
                                    marginTop={5}
                                    variant="h3"
                                    align="center"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    Our Products
                                </Typography>
                                <PaginateArray
                                    arrayType="products"
                                    arrayData={shelterProducts}
                                    itemsPerPage={6}
                                    md={4}
                                />
                            </>
                        )}
                    </Grid>
                    <Container>
                        <Grid>
                            <ProductModal />
                            <PetModal />
                        </Grid>
                    </Container>
                </Container>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Shelter
