import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link as LinkRouter } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ShelterCard({ shelter }) {
    // eslint-disable-next-line react/prop-types
    const { name, logo, user, _id } = shelter

    return (
        <div>
            <Card>
                <CardMedia
                    component="img"
                    alt="Imagen de un animal"
                    height="140"
                    image={logo}
                />
                <CardContent sx={{ flexGrow: 1, minHeight: '125px' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        owner: {user[0].userName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ my: 2, color: '#515151', display: 'block' }}>
                        <LinkRouter to={`/shelter/${_id}`}>
                            Go to Description
                        </LinkRouter>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
