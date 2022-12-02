import { Typography } from '@mui/material';
import './Loading.css';

function Loading() {
  return (
    <div className='loading'>
      <Typography
        variant='h5'
        sx={{ textTransform: 'uppercase', letterSpacing: '2px' }}
      >
        loading...
      </Typography>
    </div>
  );
}

export default Loading;
