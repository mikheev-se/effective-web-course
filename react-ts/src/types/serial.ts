import { Entity } from './entity';
import { RelatedEntity } from './relatedEntity';

export type Serial = Entity & {
  characters: RelatedEntity[];
  comics: RelatedEntity[];
};
