import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import CardType from '../../types/card';

function Card({ imageLink, name, description }: CardType) {
  return (
    <MUICard sx={{ width: '300px' }}>
      <CardMedia
        component='img'
        height='180'
        image={imageLink}
        alt={name}
      ></CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant='h6'
          component='div'
          sx={{ fontWeight: 900, color: 'var(--red)' }}
        >
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
    </MUICard>
  );
}

export default Card;
