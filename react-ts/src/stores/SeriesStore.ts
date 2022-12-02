import { action, makeObservable, observable, runInAction } from 'mobx';
import { getSeriesList } from '../api/series';
import { Serial } from '../types/serial';

class SeriesStore {
  @observable
  limit: number = 1;

  @observable
  total: number = 0;

  @observable
  count: number = 0;

  @observable
  series: Serial[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getSeriesList = async (offset: number = 0) => {
    try {
      this.loading = true;

      const { limit, total, count, series } = await getSeriesList(offset);

      runInAction(() => {
        this.limit = limit;
        this.total = total;
        this.count = count;
        this.series = series;
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

const seriesStore = new SeriesStore();
export default seriesStore;
