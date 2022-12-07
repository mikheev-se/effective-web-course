import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getComic } from '../../api/comics';
import { Comic } from '../../types/comic';
import Loading from '../Loading/Loading';
import SingleEntityPage from '../SingleEntityPage/SingleEntityPage';

function SingleCharacter() {
  const { id } = useParams();
  const [entity, setEntity] = useState<Comic>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      setEntity(await getComic(parseInt(id as string)));
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return entity?.id ? (
    <SingleEntityPage
      entity={entity}
      relatedEntities={{ characters: entity.characters, series: entity.series }}
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

export default SingleCharacter;
