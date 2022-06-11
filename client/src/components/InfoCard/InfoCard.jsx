import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import Typography from '@mui/material/Typography'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FemaleIcon from '@mui/icons-material/Female'
import MaleIcon from '@mui/icons-material/Male'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PaidIcon from '@mui/icons-material/Paid'
import InventoryIcon from '@mui/icons-material/Inventory'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function InfoCard({
    item,
    type,
    buttonOne = null,
    buttonTwo = null,
}) {
    // IMPLEMENT LOGIN
    const login = false
    const [favorite, setFavorite] = useState(true) // Debe ser utilizado con la bas de datos
    const addFavorite = () => {
        setFavorite(!favorite)
        console.log(favorite)
    }

    // Constantes para la card
    const data = {
        title: type === 'pet' ? item.nickname : item.name,
        titleIcon: item.genre ? (
            item.genre === 'Male' ? (
                <MaleIcon />
            ) : (
                <FemaleIcon />
            )
        ) : null,
        alt: type === 'pet' ? item.subrace : item.name,
        img: type === 'pet' ? item.image[0] : item.img[0],
        firstsIcon: type === 'pet' ? <AccessTimeIcon /> : <PaidIcon />,
        firstsDesc: type === 'pet' ? `${item.age} years` : `${item.price} $`,
        secondIcon: type === 'pet' ? <LocationCityIcon /> : <InventoryIcon />,
        secondDesc: type === 'pet' ? item.city : `${item.stock} items in stock`,
        firstsButton: type === 'pet' ? 'About Me' : 'More Info',
        secondButton: type === 'pet' ? 'Adopt Me' : 'Buy',
    }
    // Fin Constantes para la card

    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    alt={data.alt}
                    height={type === 'pet' ? '250' : '300'}
                    image={data.img}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        variant="h5"
                        component="div"
                    >
                        {data.title}
                        {data.titleIcon}
                    </Typography>
                    <Typography display={'flex'}>
                        {data.firstsIcon}
                        {data.firstsDesc}
                    </Typography>
                    <Typography display={'flex'} paragraph={true}>
                        {data.secondIcon}
                        {data.secondDesc}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <IconButton
                        sx={[
                            favorite ? { color: 'red' } : { color: 'gray' },
                            login ? null : { display: 'none' },
                        ]}
                        onClick={addFavorite}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => buttonOne(item._id)}
                    >
                        {data.firstsButton}
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={buttonTwo}
                    >
                        {data.secondButton}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
InfoCard.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    buttonOne: PropTypes.func,
    buttonTwo: PropTypes.func,
}
