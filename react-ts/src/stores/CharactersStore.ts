import { action, makeObservable, observable, runInAction } from 'mobx';
import { getCharactersList } from '../api/characters';
import { Character } from '../types/character';

class CharactresStore {
  @observable
  limit: number = 1;

  @observable
  total: number = 0;

  @observable
  count: number = 0;

  @observable
  characters: Character[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharactersList = async (offset: number = 0) => {
    try {
      this.loading = true;

      const { limit, total, count, characters } = await getCharactersList(
        offset
      );

      runInAction(() => {
        this.limit = limit;
        this.total = total;
        this.count = count;
        this.characters = characters;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const charactersStore = new CharactresStore();
export default charactersStore;
