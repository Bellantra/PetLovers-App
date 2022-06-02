import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AdoptCard from '../components/Adoptions/AdoptCard'
import { getAdoptablePets } from '../redux/asyncActions/pet/getAdoptablePets'
import Filtros from '../components/PetFilter/PetFilter'

const theme = createTheme()

export default function Adoptions() {
    const { adoptPets, status } = useSelector((state) => state.adopt)
    const dispatch = useDispatch()

    useEffect(() => {
        if (adoptPets.length < 1) dispatch(getAdoptablePets())
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
                <Filtros></Filtros>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    {status === 'success' ? (
                        <Grid container spacing={4}>
                            {adoptPets.map((pet) => (
                                <Grid item key={pet._id} xs={12} sm={6} md={4}>
                                    <AdoptCard
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                        pet={pet}
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
