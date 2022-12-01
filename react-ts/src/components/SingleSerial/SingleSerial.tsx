import { Typography } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { series } from '../../mocks';
import SingleEntityPage from '../SingleEntityPage/SingleEntityPage';

function SingleSerial() {
  const { id } = useParams();
  const entity = series.find((serial) => serial.id.toString() === id);
  return entity ? (
    <SingleEntityPage
      entity={entity}
      relatedEntities={['Characters', 'Comics']}
    />
  ) : (
    <div className='entity-error'>
      <Typography variant='h5' color={'var(--red)'}>
        An error occured: serial with id {id} is not found.
      </Typography>
      <Typography variant='h6'>
        <Link to={'/series'}>Go to series page</Link>
      </Typography>
    </div>
  );
}

export default SingleSerial;
