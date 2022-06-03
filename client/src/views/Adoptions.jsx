import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import InfoCard from '../components/InfoCard/InfoCard'
import Pagination from '../components/Pagination/Pagination'
import { getAdoptablePets } from '../redux/asyncActions/pet/getAdoptablePets'
const theme = createTheme()

export default function Adoptions() {
    const { adoptPets, status } = useSelector((state) => state.adopt)
    const dispatch = useDispatch()

    useEffect(() => {
        if (adoptPets.length < 1) dispatch(getAdoptablePets())
    }, [])

    // ----------   PAGINADO------------
    const perPage = 6
    const [currentPage, setCurrentPage] = useState(1)
    const count = Math.ceil(adoptPets.length / perPage)

    const leftLimit = currentPage * perPage - perPage
    const rightLimit = leftLimit + perPage

    const data = adoptPets.slice(leftLimit, rightLimit)
    // -----------FIN PAGINADO----------------

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
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    {status === 'success' ? (
                        <Grid container spacing={4}>
                            {data.map((pet) => (
                                <Grid item key={pet._id} xs={12} sm={6} md={4}>
                                    <InfoCard
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
                <Grid container justifyContent={'center'}>
                    <Pagination
                        count={count}
                        page={currentPage}
                        setPage={setCurrentPage}
                        color="primary"
                    ></Pagination>
                </Grid>
            </main>
        </ThemeProvider>
    )
}
