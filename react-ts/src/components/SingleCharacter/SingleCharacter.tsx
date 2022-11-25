import { useParams } from 'react-router';
import { characters } from '../../mocks';
import SingleEntityPage from '../SingleEntityPage/SingleEntityPage';

function SingleCharacter() {
  const { id } = useParams();
  const entity = characters.find((character) => character.id.toString() === id);
  return entity ? (
    <SingleEntityPage entity={entity} relatedEntities={['Comics', 'Series']} />
  ) : (
    <div></div>
  );
}

export default SingleCharacter;
