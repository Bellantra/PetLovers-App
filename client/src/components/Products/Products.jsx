import PropTypes from 'prop-types'
import { useState } from 'react'
import { Pagination, Box } from '@mui/material'

import InfoCard from '../InfoCard/InfoCard'

// Este componente realiza el paginado y renderizado de un array de Objetos
// Recibe 3 parametros por Props
// array = Array de Objetos q se quiere pginar y renderizar
// arrayType = Tipo de arreglo q se quiere renderizar ( "pet", "shelter", "product")
// petPerPage = Cantidad de Cards a renderizar por pagina
//

export const Products = ({ array, arrayType, petPerPage }) => {
    const perPage = petPerPage
    const [currentPage, setCurrentPage] = useState(1)
    const count = Math.ceil(array.length / perPage)
    console.log(count)
    const leftLimit = currentPage * perPage - perPage
    const rightLimit = leftLimit + perPage
    console.log(leftLimit, rightLimit)
    const data = array.slice(leftLimit, rightLimit)
    console.log(data)

    const handleChange = (e, p) => {
        setCurrentPage(p)
    }

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
                        (product, index) =>
                            arrayType === 'products' && (
                                <InfoCard
                                    key={index}
                                    item={product}
                                    type={'product'}
                                />
                            )
                    )}
            </div>
            <Box display="center" justifyContent="center" marginBottom="20px">
                <Pagination
                    count={count}
                    page={currentPage}
                    onChange={handleChange}
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
