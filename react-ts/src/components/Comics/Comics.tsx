import { Pagination } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import comicsStore from '../../stores/ComicsStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Comics() {
  const { limit, total, count, comics, loading } = comicsStore;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    comicsStore.getComicsList((currentPage - 1) * limit);
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Content name='Comics' items={comics} />
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

export default observer(Comics);
