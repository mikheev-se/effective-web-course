import {
  Card as MUICard,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CardType from '../../types/card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react';
import { pink } from '@mui/material/colors';

function Card({
  id,
  imageLink,
  name,
  description,
  entityName,
}: CardType & { entityName: string }) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(
    () => setIsFavorite(localStorage.getItem(id.toString()) ? true : false),
    []
  );

  return (
    <MUICard sx={{ width: '300px', position: 'relative' }}>
      <Link to={`/${entityName}/${id}`}>
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
      <IconButton
        sx={{ position: 'absolute', top: '5px', right: '5px' }}
        onClick={() => {
          if (isFavorite) {
            localStorage.removeItem(id.toString());
          } else {
            localStorage.setItem(id.toString(), entityName);
          }
          setIsFavorite(!isFavorite);
        }}
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: pink[500] }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: pink[500] }} />
        )}
      </IconButton>
    </MUICard>
  );
}

export default Card;
