import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getSerial } from '../../api/series';
import { Serial } from '../../types/serial';
import Loading from '../Loading/Loading';
import SingleEntityPage from '../SingleEntityPage/SingleEntityPage';

function SingleCharacter() {
  const { id } = useParams();
  const [entity, setEntity] = useState<Serial>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      setEntity(await getSerial(parseInt(id as string)));
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return entity?.id ? (
    <SingleEntityPage
      entity={entity}
      relatedEntities={{ characters: entity.characters, comics: entity.comics }}
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

export default SingleCharacter;
