import { Grid } from '@mui/material'
import Typography from '@mui/material/node/Typography'
import { Box } from '@mui/system'
import { createTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShelters } from '../../redux/features/shelter/shelterSlice'
import { useEffect } from 'react'

const theme = createTheme({
    palette: {
        text: {
            primary: '#FFFFFF',
        },
    },
})

const Shelters = () => {
    const dispatch = useDispatch()
    const { shelters } = useSelector((state) => state.shelter)

    useEffect(() => {
        if (!shelters) dispatch(getAllShelters())
    }, [])

    console.log(shelters)

    return (
        <Grid bgcolor={'#660000'}>
            <Box paddingY={5}>
                <Typography
                    theme={theme}
                    variant="h2"
                    fontWeight={800}
                    color={'text.primary'}
                    align="center"
                >
                    Nuestros Refugios
                </Typography>
                {shelters ? <Grid></Grid> : <div>Loading</div>}
            </Box>
        </Grid>
    )
}

export default Shelters
