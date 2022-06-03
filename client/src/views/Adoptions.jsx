import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PaginateArray from '../components/PaginateArray/PaginateArray'
import { getAdoptablePets } from '../redux/asyncActions/pet/getAdoptablePets'
import Loading from '../components/Loading/Loading'
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
                {status === 'success' ? (
                    <PaginateArray
                        arrayType={'pet'}
                        arrayData={adoptPets}
                        itemsPerPage={6}
                    />
                ) : (
                    <Loading />
                )}
            </main>
        </ThemeProvider>
    )
}
