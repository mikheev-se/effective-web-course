import { action, makeObservable, observable, runInAction } from 'mobx';
import { getComicsList } from '../api/comics';
import { Comic } from '../types/comic';

class ComicsStore {
  @observable
  comics: Comic[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsList = async () => {
    try {
      this.loading = true;

      const comics = await getComicsList();

      runInAction(() => {
        this.comics = comics;
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

const comicsStore = new ComicsStore();
export default comicsStore;
