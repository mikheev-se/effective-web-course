import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import seriesStore from '../../stores/SeriesStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Series() {
  const { series, loading } = seriesStore;

  useEffect(() => {
    seriesStore.getSeriesList();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Content name='Series' items={series} />;
}

export default observer(Series);
