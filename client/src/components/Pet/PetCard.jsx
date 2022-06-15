import PropTypes from 'prop-types'
import { useState } from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FemaleIcon from '@mui/icons-material/Female'
import MaleIcon from '@mui/icons-material/Male'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationCityIcon from '@mui/icons-material/LocationCity'

import { useDispatch, useSelector } from 'react-redux'
import { getPetById } from '../../redux/features/adopt/adoptSlice'
import AdoptForm from '../../utils/adoptForm'
import { Link } from 'react-router-dom'

export default function PetCard({ item, buttonTwo = null }) {
    const { userInfo } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleDetail = () => {
        dispatch(getPetById(item._id))
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
        title: item.nickname,
        titleIcon: item.genre ? (
            item.genre === 'Male' ? (
                <MaleIcon />
            ) : (
                <FemaleIcon />
            )
        ) : null,
        alt: item.subrace,
        img: item.image[0],
        firstsIcon: <AccessTimeIcon />,
        firstsDesc: `${item.age} years`,
        secondIcon: <LocationCityIcon />,
        secondDesc: item.city,
        firstsButton: 'About Me',
        secondButton: 'Adopt Me',
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
                        onClick={handleDetail}
                    >
                        {data.firstsButton}
                    </Button>
                    <Button size="small" variant="contained">
                        <a href={`https://docs.google.com/forms/d/e/1FAIpQLScNt54-Y2wTswE6V4-TLVss76WUiOq5nPTYLyrMO7y_JPqQ4g/viewform?usp=pp_url&entry.1979261734=${item.nickname}&entry.1040828766=${item.age}&entry.512539991=${item.shelter.name}&entry.577423619=${userInfo
                                                ? userInfo.fullName
                                                : 'Prueba'
                                        }`} 
                            target="_blank"
                            >Adopt Me!</a>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

PetCard.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    buttonOne: PropTypes.func,
    buttonTwo: PropTypes.func,
}
