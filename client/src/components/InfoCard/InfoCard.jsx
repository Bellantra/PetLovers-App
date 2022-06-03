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

    const IMG_ALT = type === 'pet' ? item.subrace : item.name
    const IMG = type === 'pet' ? item.image[0] : item.img
    const TITLE = type === 'pet' ? item.nickname : item.name
    const TITLE_ICON = item.genre ? (
        item.genre === 'Male' ? (
            <MaleIcon />
        ) : (
            <FemaleIcon />
        )
    ) : null
    const FIRSTS_ICON = type === 'pet' ? <AccessTimeIcon /> : <PaidIcon />
    const FIRSTS_DESC = type === 'pet' ? `${item.age} years` : `${item.price} $`
    const SECOND_ICON =
        type === 'pet' ? <LocationCityIcon /> : <InventoryIcon />
    const SECOND_DESC =
        type === 'pet' ? item.city : `${item.stock} items in stock`
    const FIRSTS_BUTTON = type === 'pet' ? 'About Me' : 'More Info'
    const SECOND_BUTTON = type === 'pet' ? 'Adopt Me' : 'Buy'
    return (
        <Card>
            <CardMedia
                component="img"
                alt={IMG_ALT}
                width="250"
                height="250"
                image={IMG}
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
                    {TITLE}
                    {TITLE_ICON}
                </Typography>
                <Typography display={'flex'}>
                    {FIRSTS_ICON}
                    {FIRSTS_DESC}
                </Typography>
                <Typography display={'flex'} paragraph={true}>
                    {SECOND_ICON}
                    {SECOND_DESC}
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
                <Button size="small" variant="contained" onClick={buttonOne}>
                    {FIRSTS_BUTTON}
                </Button>
                <Button size="small" variant="contained" onClick={buttonTwo}>
                    {SECOND_BUTTON}
                </Button>
            </CardActions>
        </Card>
    )
}
InfoCard.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    buttonOne: PropTypes.func,
    buttonTwo: PropTypes.func,
}
