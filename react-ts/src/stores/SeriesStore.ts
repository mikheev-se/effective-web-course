import { action, makeObservable, observable, runInAction } from 'mobx';
import { getSeriesList } from '../api/series';
import { Serial } from '../types/serial';

class SeriesStore {
  @observable
  series: Serial[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getSeriesList = async () => {
    try {
      this.loading = true;

      const series = await getSeriesList();

      runInAction(() => {
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
