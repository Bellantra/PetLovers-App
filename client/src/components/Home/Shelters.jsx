import { useNavigate } from 'react-router-dom'

import { Grid, Link, Paper } from '@mui/material'
import Typography from '@mui/material/node/Typography'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'

const Shelters = () => {
    const { shelters, status } = useSelector((state) => state.shelter)

    const navigate = useNavigate()

    return (
        <Box paddingBottom={'8rem'}>
            <Typography
                component="h1"
                variant="h5"
                sx={{ fontWeight: 800, fontSize: 80 }}
                align={'center'}
                marginY={10}
            >
                Our Shelters
            </Typography>

            <Grid container spacing={2} gap={3} justifyContent={'space-around'}>
                {status === 'success' ? (
                    shelters.map((shelter, index) => (
                        <Link
                            component="button"
                            underline="none"
                            key={index}
                            onClick={() => navigate(`/shelter/${shelter._id}`)}
                        >
                            <Paper elevation={6} align="center">
                                <Box
                                    component="img"
                                    src={shelter.logo}
                                    alt="green iguana"
                                    height={'200px'}
                                    width={'200px'}
                                    padding={'1rem'}
                                ></Box>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    padding={'1rem'}
                                >
                                    {shelter.name}
                                </Typography>
                            </Paper>
                        </Link>
                    ))
                ) : (
                    <div>Loading</div>
                )}
            </Grid>
        </Box>
    )
}

export default Shelters
