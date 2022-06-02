import PropTypes from 'prop-types'
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
} from '@mui/material'

export const ProductCard = ({ product }) => {
    const { name, img, price } = product

    return (
        <Card
            sx={{
                height: '260px',
                width: '180px',
                border: 'solid 1px lightgrey',
            }}
        >
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="nombre"
                sx={{ marginBottom: '0px', padding: '0px' }}
            />
            <CardContent sx={{ marginTop: '0px', padding: '0px' }}>
                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                >
                    {name}
                </Typography>
                <Typography align="center" color="textPrimary" variant="body1">
                    Price: {price}
                </Typography>
            </CardContent>

            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    alignItems: 'center',
                }}
            >
                <Button size="medium" variant="contained">
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}
ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}
