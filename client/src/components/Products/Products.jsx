import PropTypes from 'prop-types'
import { useState } from 'react'
import { Box } from '@mui/material'

import { ProductCard } from './ProductCard'
import Pagination from '../Pagination/Pagination'

// Este componente realiza el paginado y renderizado de un array de Objetos
// Recibe 3 parametros por Props
// array = Array de Objetos q se quiere pginar y renderizar
// arrayType = Tipo de arreglo q se quiere renderizar ( "pet", "shelter", "product")
// petPerPage = Cantidad de Cards a renderizar por pagina
//

export const Products = ({ array, arrayType, petPerPage }) => {
    // ----------   PAGINADO------------
    const perPage = petPerPage
    const [currentPage, setCurrentPage] = useState(1)
    const count = Math.ceil(array.length / perPage)
    const leftLimit = currentPage * perPage - perPage
    const rightLimit = leftLimit + perPage

    const data = array.slice(leftLimit, rightLimit)
    // -----------FIN PAGINADO----------------

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    marginBottom: '20px',
                }}
            >
                {data.length &&
                    data.map(
                        (el, index) =>
                            arrayType === 'products' && (
                                <ProductCard key={index} product={el} />
                            )
                    )}
            </div>
            <Box display="center" justifyContent="center" marginBottom="20px">
                <Pagination
                    count={count}
                    page={currentPage}
                    setPage={setCurrentPage}
                    color="primary"
                />
            </Box>
        </div>
    )
}

Products.propTypes = {
    array: PropTypes.array.isRequired,
    arrayType: PropTypes.string.isRequired,
    petPerPage: PropTypes.number.isRequired,
}
