import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AdoptCard from '../components/AdoptCard'
import { getAllAdoptablePets } from '../redux/asyncActions/adopt/getAllAdoptablePets'
// Prueba para Shelter, no es de este componente
import {
    getAllShelters,
    getShelterById,
} from '../redux/features/shelter/shelterSlice'
// Fin Prueba para Shelter, no es de este componente
const theme = createTheme()

export default function Adoptions() {
    const { adoptPets, status } = useSelector((state) => state.adopt)
    // Prueba para Shelter, no es de este componente
    const { shelters, shelterDetail, statusDetail } = useSelector(
        (state) => state.shelter
    )
    const shelterStatus = useSelector((state) => state.shelter.status)
    // Fin de prueba para Shelter, no es de este componente------
    const dispatch = useDispatch()

    useEffect(() => {
        if (adoptPets.length < 1) dispatch(getAllAdoptablePets())
        // Prueba para Shelter, no es de este componente
        if (shelters.length < 1) dispatch(getAllShelters())
        if (!shelters.name) dispatch(getShelterById('628ef0b4fc13ae3528000033'))
        // Fin de Prueba para Shelter, no es de este componente
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Adoptions
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Are you looking for a best friend? Trusty companion?
                            Exercise partner? Lap warmer? Well, you&apos;re in
                            the right place! Your match may be just a few clicks
                            away!
                        </Typography>
                    </Container>
                </Box>
                {/* Prueba para Shelter, no es de este componente */}
                {shelterStatus === 'success' ? (
                    <h1> Are {shelters.length} shelters </h1>
                ) : (
                    <h1> Error </h1>
                )}
                {statusDetail === 'success' ? (
                    <h1>
                        {shelterDetail.name} is the name of the shelter
                        628ef0b4fc13ae3528000033
                    </h1>
                ) : (
                    <h1> Error </h1>
                )}
                {/* Fin de Prueba para Shelter, no es de este componente */}
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    {status === 'success' ? (
                        <Grid container spacing={4}>
                            {adoptPets.map((pets) => (
                                <Grid item key={pets} xs={12} sm={6} md={4}>
                                    <AdoptCard
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                        pets={pets}
                                        key={pets._id}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <h1> LOADING</h1>
                    )}
                </Container>
            </main>
        </ThemeProvider>
    )
}
