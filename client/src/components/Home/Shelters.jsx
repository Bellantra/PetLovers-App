import { Grid } from '@mui/material'
import Typography from '@mui/material/node/Typography'
import { Box } from '@mui/system'
import { createTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShelters } from '../../redux/features/shelter/shelterSlice'
import { useEffect } from 'react'
import ShelterCard from '../ShelterCard'

const theme = createTheme({
    palette: {
        text: {
            primary: '#FFFFFF',
        },
    },
})

const Shelters = () => {
    const dispatch = useDispatch()
    const { shelters, status } = useSelector((state) => state.shelter)

    useEffect(() => {
        if (status !== 'success') dispatch(getAllShelters())
    }, [])

    return (
        <Grid bgcolor={'#660000'}>
            <Box paddingY={5}>
                <Typography
                    theme={theme}
                    variant="h2"
                    fontWeight={800}
                    color={'text.primary'}
                    align="center"
                >
                    Nuestros Refugios
                </Typography>
                {status === 'success' ? (
                    <Grid container spacing={2} align={'center'}>
                        {shelters.map((shelter) => (
                            <Grid item key={shelter._id} xs={50} sm={6} md={2}>
                                <ShelterCard
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                    shelter={shelter}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <div>Loading</div>
                )}
            </Box>
        </Grid>
    )
}

export default Shelters
