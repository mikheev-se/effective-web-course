import { Pagination } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import seriesStore from '../../stores/SeriesStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Series() {
  const { limit, total, count, series, loading } = seriesStore;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    seriesStore.getSeriesList((currentPage - 1) * limit);
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Content name='Series' items={series} />
      <div className='main__pages'>
        <Pagination
          page={currentPage}
          count={Math.floor(total / limit) + 1}
          onChange={(_, value) => {
            setCurrentPage(value);
          }}
        />
      </div>
    </div>
  );
}

export default observer(Series);
