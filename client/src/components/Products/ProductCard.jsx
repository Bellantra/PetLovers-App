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
                width: '220px',
                border: 'solid 1px lightgrey',
            }}
        >
            <CardMedia
                component="img"
                height="170"
                image={img[0]}
                alt="nombre"
                sx={{ marginBottom: '0px', padding: '0px' }}
            />
            <CardContent sx={{ marginTop: '0px', padding: '0px' }}>
                <Typography
                    style={{ margin: '0px', padding: '0px' }}
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="body1"
                    component="div"
                >
                    {name}
                </Typography>
                <Typography
                    style={{ margin: '0px', padding: '0px' }}
                    align="center"
                    color="textPrimary"
                    variant="body2"
                    component="div"
                >
                    Price: {price}
                </Typography>
            </CardContent>

            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '0px',
                    alignItems: 'center',
                    padding: '0px',
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
