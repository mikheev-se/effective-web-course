import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CardType from '../../types/card';

function Card({ id, imageLink, name, description }: CardType) {
  return (
    <MUICard sx={{ width: '300px' }}>
      <Link to={`${id}`}>
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
      </Link>
    </MUICard>
  );
}

export default Card;
