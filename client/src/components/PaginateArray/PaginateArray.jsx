import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import InfoCard from '../InfoCard/InfoCard'
import Pagination from '../Pagination/Pagination'
import PropTypes from 'prop-types'
const theme = createTheme()

export default function PaginateArray({
    arrayData,
    arrayType,
    itemsPerPage = 6,
    xs = 12,
    sm = 6,
    md = 4,
    cardSize = 'md',
}) {
    // ----------   PAGINADO------------
    const perPage = itemsPerPage
    const [currentPage, setCurrentPage] = useState(1)
    const count = Math.ceil(arrayData.length / perPage)

    const leftLimit = currentPage * perPage - perPage
    const rightLimit = leftLimit + perPage
    const dataSlice = arrayData.slice(leftLimit, rightLimit)

    // -----------FIN PAGINADO----------------

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth={cardSize}>
                    <Grid container spacing={4}>
                        {dataSlice.map((item) => (
                            <Grid item key={item._id} xs={xs} sm={sm} md={md}>
                                <InfoCard
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                    item={item}
                                    type={arrayType}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Grid container justifyContent={'center'}>
                    {count > 1 ? (
                        <Pagination
                            count={count}
                            page={currentPage}
                            setPage={setCurrentPage}
                            color="primary"
                        />
                    ) : null}
                </Grid>
            </main>
        </ThemeProvider>
    )
}

PaginateArray.propTypes = {
    arrayData: PropTypes.array.isRequired,
    arrayType: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    cardSize: PropTypes.string,
}
