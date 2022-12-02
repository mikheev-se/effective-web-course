import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCharacter } from '../../api/characters';
import { Character } from '../../types/character';
import Loading from '../Loading/Loading';
import SingleEntityPage from '../SingleEntityPage/SingleEntityPage';

function SingleCharacter() {
  const { id } = useParams();
  const [entity, setEntity] = useState<Character>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      setEntity(await getCharacter(parseInt(id as string)));
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return entity?.id ? (
    <SingleEntityPage
      entity={entity}
      relatedEntities={{ comics: entity.comics, series: entity.series }}
    />
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
