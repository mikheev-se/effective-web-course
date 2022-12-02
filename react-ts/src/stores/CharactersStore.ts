import { action, makeObservable, observable, runInAction } from 'mobx';
import { getCharactersList } from '../api/characters';
import { Character } from '../types/character';

class CharactresStore {
  @observable
  characters: Character[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharactersList = async () => {
    try {
      this.loading = true;

      const characters = await getCharactersList();

      runInAction(() => {
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
