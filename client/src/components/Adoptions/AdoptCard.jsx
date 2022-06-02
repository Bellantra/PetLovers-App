import { useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import styled from 'styled-components'
import Modal from '../Modal/Modal'
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import Pagination from '../Pagination/Pagination'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'

// eslint-disable-next-line react/prop-types
export default function AdoptCard({ pet }) {
    // eslint-disable-next-line react/prop-types
    const { image, nickname, age } = pet
    const [estadoModal1, setEstadoModal1] = useState(false)

    return (
        <div>
            <Card
                sx={{ maxWidth: 250 }}
                onClick={() => setEstadoModal1(!estadoModal1)}
            >
                <CardMedia
                    component="img"
                    alt="Imagen de un animal"
                    height="140"
                    image={image[0]}
                />
                <CardContent sx={{ flexGrow: 1, minHeight: '125px' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {nickname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        age: {age} years
                    </Typography>
                </CardContent>
            </Card>

            <Modal
                estado={estadoModal1}
                setEstado={setEstadoModal1}
                titulo=""
                mostrarHeader={true}
                mostrarOverlay={true}
                /* lo puedo sacar, queda center por defecto */
                posicionModal={'center'}
                /* lo puedo sacar, queda 20px por defecto */
                padding={'20px'}
            >
                <Contenido>
                    <CardMedia
                        component="img"
                        alt="Imagen de un animal"
                        height="140"
                        image={image[0]}
                    />

                    <Typography gutterBottom variant="h5" component="div">
                        {nickname}
                    </Typography>

                    <UnderConstruction></UnderConstruction>
                </Contenido>
            </Modal>
        </div>
    )
}

const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }
`
