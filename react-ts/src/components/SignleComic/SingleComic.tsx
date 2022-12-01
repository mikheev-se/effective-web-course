import { Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { comics } from '../../mocks';
import SingleEntityPage from '../SingleEntityPage/SingleEntityPage';

function SingleComic() {
  const { id } = useParams();
  const entity = comics.find((comic) => comic.id.toString() === id);
  return entity ? (
    <SingleEntityPage
      entity={entity}
      relatedEntities={['Characters', 'Series']}
    />
  ) : (
    <div className='entity-error'>
      <Typography variant='h5' color={'var(--red)'}>
        An error occured: comic with id {id} is not found.
      </Typography>
      <Typography variant='h6'>
        <Link to={'/comics'}>Go to comics page</Link>
      </Typography>
    </div>
  );
}

export default SingleComic;
