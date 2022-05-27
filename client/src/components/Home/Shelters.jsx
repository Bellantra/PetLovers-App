import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
} from '@mui/material'
import Typography from '@mui/material/node/Typography'
import { Box } from '@mui/system'
import { createTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShelters } from '../../redux/features/shelter/shelterSlice'
import { useEffect } from 'react'

const theme = createTheme({
    palette: {
        text: {
            primary: '#E9D5CA',
        },
    },
})

const shelters1 = [
    {
        name: 'Patitas de Glew',
        logo: 'https://res.cloudinary.com/petlovers1/image/upload/v1653649543/Shelters/Logos/logo4.png',
    },
    {
        name: 'Arca de Noe',
        logo: 'https://res.cloudinary.com/petlovers1/image/upload/v1653649499/Shelters/Logos/logo3.png',
    },
    {
        name: 'Los Bandidos de Lomas',
        logo: 'https://res.cloudinary.com/petlovers1/image/upload/v1653649455/Shelters/Logos/logo2.png',
    },
    {
        name: 'Refugio Las renatas',
        logo: 'https://res.cloudinary.com/petlovers1/image/upload/v1653649434/Shelters/Logos/logo1.png',
    },
    {
        name: 'Los gatitos de Nora',
        logo: 'https://res.cloudinary.com/petlovers1/image/upload/v1653649594/Shelters/Logos/logo6.png',
    },
]

const Shelters = () => {
    const dispatch = useDispatch()
    const { shelters } = useSelector((state) => state.shelter)

    useEffect(() => {
        if (!shelters) dispatch(getAllShelters())
    }, [])

    console.log(shelters)

    return (
        <Grid bgcolor={'#293462'}>
            <Box paddingY={5}>
                <Typography
                    theme={theme}
                    variant="h2"
                    fontWeight={800}
                    color={'text.primary'}
                    align="center"
                    marginY={10}
                >
                    Our Shelters
                </Typography>
                <Grid
                    container
                    spacing={2}
                    gap={3}
                    justifyContent={'space-around'}
                >
                    {shelters1 ? (
                        shelters1.map((shelter, index) => (
                            // <Grid
                            //     container
                            //     key={index}
                            //     bgcolor={'#E9D5CA'}
                            //     maxWidth={250}
                            //     maxHeight={250}
                            // >
                            //     <Grid item minWidth={150}>
                            //         <img alt="Example Alt" src={shelter.logo} />
                            //     </Grid>

                            //     <Grid item>
                            //         <Typography variant={'h6'}>
                            //             {shelter.name}
                            //         </Typography>
                            //     </Grid>
                            // </Grid>
                            <Card
                                sx={{ maxWidth: 345 }}
                                key={index}
                                align="center"
                                item
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        maxWidth={250}
                                        image={shelter.logo}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {shelter.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                    ) : (
                        <div>Loading</div>
                    )}
                </Grid>
            </Box>
        </Grid>
    )
}

export default Shelters
