import { Entity } from './entity';
import { RelatedEntity } from './relatedEntity';

export type Comic = Entity & {
  characters: RelatedEntity[];
  series: RelatedEntity[];
};
