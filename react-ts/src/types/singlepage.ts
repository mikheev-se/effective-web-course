import { Character } from './character';
import { Comic } from './comic';
import { RelatedEntity } from './relatedEntity';
import { Serial } from './serial';

type SinglePage = {
  entity: Character | Comic | Serial;
  relatedEntities: {
    characters?: RelatedEntity[];
    comics?: RelatedEntity[];
    series?: RelatedEntity[];
  };
};

export default SinglePage;
