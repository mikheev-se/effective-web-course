import { action, makeObservable, observable, runInAction } from 'mobx';
import { getComicsList } from '../api/comics';
import { Comic } from '../types/comic';

class ComicsStore {
  @observable
  limit: number = 1;

  @observable
  total: number = 0;

  @observable
  count: number = 0;

  @observable
  comics: Comic[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsList = async (offset: number = 0, titleStartsWith: string = '') => {
    try {
      this.loading = true;

      const { limit, total, count, comics } = await getComicsList(
        offset,
        titleStartsWith
      );

      runInAction(() => {
        this.limit = limit;
        this.total = total;
        this.count = count;
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
