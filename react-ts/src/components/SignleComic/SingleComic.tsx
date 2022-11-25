import { useParams } from 'react-router';
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
    <div></div>
  );
}

export default SingleComic;
