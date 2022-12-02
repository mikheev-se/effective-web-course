import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import seriesStore from '../../stores/SeriesStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Series() {
  const { limit, total, count, series, loading } = seriesStore;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    seriesStore.getSeriesList((currentPage - 1) * limit, searchQuery);
  }, [currentPage, searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Content
      name='Series'
      items={series}
      total={total}
      limit={limit}
      page={currentPage}
      setPage={setCurrentPage}
      query={searchQuery}
      setQuery={setSearchQuery}
    />
  );
}

export default observer(Series);
