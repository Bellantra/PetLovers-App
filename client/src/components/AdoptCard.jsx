import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function AdoptCard(props) {
    // eslint-disable-next-line react/prop-types
    const { image, nickname, age } = props

    return (
        <div>
            <Card sx={{ maxWidth: 375 }}>
                <CardMedia
                    component="img"
                    alt={image}
                    height="140"
                    image={image}
                />
                <CardContent sx={{ flexGrow: 1, minHeight: '125px' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {nickname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        `age: {age} years`
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">+Info</Button>
                    <Button size="small">Adopt</Button>
                </CardActions>
            </Card>
        </div>
    )
}
