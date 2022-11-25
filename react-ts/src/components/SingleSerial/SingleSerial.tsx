import { useParams } from 'react-router';
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
    <div></div>
  );
}

export default SingleSerial;
