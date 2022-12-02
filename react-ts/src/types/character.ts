import { Entity } from './entity';
import { RelatedEntity } from './relatedEntity';

export type Character = Entity & {
  comics: RelatedEntity[];
  series: RelatedEntity[];
};
