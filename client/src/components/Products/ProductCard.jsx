import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import Typography from '@mui/material/Typography'

import FavoriteIcon from '@mui/icons-material/Favorite'
import PaidIcon from '@mui/icons-material/Paid'
import InventoryIcon from '@mui/icons-material/Inventory'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../redux/features/product/productSlice'

export default function ProductCard({
    item,
}) {
    const { shelterDetail } = useSelector(
        (state) => state.shelter
    )
    const dispatch = useDispatch()

    const handleDetail = () => {
        console.log(item._id)
        dispatch(getProductById(item._id))
    }

    // IMPLEMENT LOGIN
    const login = false
    const [favorite, setFavorite] = useState(true) // Debe ser utilizado con la base de datos
    const addFavorite = () => {
        setFavorite(!favorite)
        console.log(favorite)
    }

    // Constantes para la card
    const data = {
        title: item.name,
        alt: item.name,
        img: item.img[0],
        firstsIcon: <PaidIcon />,
        firstsDesc: `${item.price} $`,
        secondIcon: <InventoryIcon />,
        secondDesc: `${item.stock} items in stock`,
        firstsButton: 'More Info',
        secondButton: 'Buy',
    }
    // Fin Constantes para la card

    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    alt={data.alt}
                    height={'250'}
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
                        onClick={handleDetail}
                    >
                        {data.firstsButton}
                    </Button>
                    <Button size="small" variant="contained">
                        <a href={`https://docs.google.com/forms/d/e/1FAIpQLSddhIRTghZ8oNDsqBNN3QffZnqWRgOAoh8rw7pfURT2Uj1xew/viewform?usp=pp_url&entry.1979261734=${item.name}&entry.1040828766=1&entry.512539991=${shelterDetail.name}&entry.577423619=user`} 
                            target="_blank"
                            >Buy!</a>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
ProductCard.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    buttonOne: PropTypes.func,
    buttonTwo: PropTypes.func,
}
