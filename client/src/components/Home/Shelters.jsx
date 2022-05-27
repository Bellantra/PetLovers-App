import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    // Card,
    // CardActionArea,
    // CardContent,
    // CardMedia,
    Grid,
} from '@mui/material'
import Typography from '@mui/material/node/Typography'
import { Box } from '@mui/system'
import { createTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShelters } from '../../redux/features/shelter/shelterSlice'
import { useEffect } from 'react'
// import ShelterCard from '../ShelterCard'

const theme = createTheme({
    palette: {
        text: {
            primary: '#E9D5CA',
        },
    },
})

const Shelters = () => {
    const dispatch = useDispatch()
    let { shelters, status } = useSelector((state) => state.shelter)

    useEffect(() => {
        if (status !== 'success') dispatch(getAllShelters())
    }, [])

    shelters = shelters.slice(0, 4)
    console.log(shelters)
    return (
        <Grid bgcolor={'#293462'}>
            <Box paddingY={5}>
                <Typography
                    theme={theme}
                    variant="h2"
                    fontWeight={800}
                    color={'text.primary'}
                    align="center"
                    marginY={10}
                >
                    Our Shelters
                </Typography>

                <Grid
                    container
                    spacing={2}
                    gap={3}
                    justifyContent={'space-around'}
                >
                    {status === 'success' ? (
                        shelters.map((shelter, index) => (
                            <Card
                                sx={{ maxWidth: 345 }}
                                key={index}
                                align="center"
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={shelter.logo}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {shelter.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                    ) : (
                        <div>Loading</div>
                    )}
                </Grid>
            </Box>
        </Grid>
    )
}

export default Shelters
