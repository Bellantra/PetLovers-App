import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Pagination from '../Pagination/Pagination'
import PropTypes from 'prop-types'
import PetCard from '../Pet/PetCard'
import ProductCard from '../Products/ProductCard'

const theme = createTheme()

/* 
Este componente contiene la infoCard y el paginado, para asociar el paginado de manera inmediata a un array de datos

arrayData: Array de objetos con la info de productos o de mascotas
arrayType: 'pet' / 'products' para identificar el tipo de informacion que se va a mostrar en la infoCard
itemsPerPage: cantidad de items que mostrara el paginado
xs, sm y md : son las variables del grid que contiene las cards (ver documentacion de Material UI)
cardSize : El ancho maximo del container.
buttonOne : callback function del primer boton de la card.
*/

export default function PaginateArray({
    arrayData,
    arrayType,
    itemsPerPage = 6,
    xs = 12,
    sm = 6,
    md = 4,
    cardSize = 'md',
    buttonOne,
}) {

    // ------------------- CARD TYPE ------------------------
    const selectCard = () => {
        if(arrayType === 'pet') return PetCard
        if(arrayType === 'products') return ProductCard
    }
   
    const Card = selectCard()
    // ------------------   PAGINADO   ----------------------

    const perPage = itemsPerPage
    const [currentPage, setCurrentPage] = useState(1)
    const count = Math.ceil(arrayData.length / perPage)

    const leftLimit = currentPage * perPage - perPage
    const rightLimit = leftLimit + perPage
    const dataSlice = arrayData.slice(leftLimit, rightLimit)

    // -----------------  FIN PAGINADO  ---------------------

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth={cardSize}>
                    <Grid container spacing={4}>
                        {dataSlice.map((item) => (
                            <Grid item key={item._id} xs={xs} sm={sm} md={md}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                    item={item}
                                    type={arrayType}
                                    buttonOne={buttonOne}
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
    buttonOne: PropTypes.func,
}
