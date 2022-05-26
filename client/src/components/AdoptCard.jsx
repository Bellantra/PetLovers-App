import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AdoptCard(props) {
  const { pets } = props

  return (
    
    <Card sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        alt={pets.image}
        height="140"
        image={pets.image}
      />
      <CardContent sx={{ flexGrow: 1, minHeight: '125px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {pets.nickname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        `age: {pets.age} years`
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">+Info</Button>
        <Button size="small">Adopt</Button>
      </CardActions>
    </Card>
  );
}
