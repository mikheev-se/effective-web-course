import { Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { characters } from '../../mocks';
import SingleEntityPage from '../SingleEntityPage/SingleEntityPage';

function SingleCharacter() {
  const { id } = useParams();
  const entity = characters.find((character) => character.id.toString() === id);
  return entity ? (
    <SingleEntityPage entity={entity} relatedEntities={['Comics', 'Series']} />
  ) : (
    <div className='entity-error'>
      <Typography variant='h5' color={'var(--red)'}>
        An error occured: character with id {id} is not found.
      </Typography>
      <Typography variant='h6'>
        <Link to={'/characters'}>Go to characters page</Link>
      </Typography>
    </div>
  );
}

export default SingleCharacter;
