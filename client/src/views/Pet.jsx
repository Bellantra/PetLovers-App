import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Typography, Container, Divider } from '@mui/material'

import { getPetById, cleanDetail } from '../redux/features/adopt/adoptSlice'

const Pet = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { petDetail, statusDetail } = useSelector((state) => state.petDetail)

    useEffect(() => {
        dispatch(getPetById(id))
        return () => dispatch(cleanDetail())
    }, [dispatch, id])

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
                        My name is {petDetail.name}
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
                        {petDetail.description}
                    </Typography>
                </Container>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default Pet
