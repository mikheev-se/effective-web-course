import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import comicsStore from '../../stores/ComicsStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Comics() {
  const { limit, total, count, comics, loading } = comicsStore;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    comicsStore.getComicsList((currentPage - 1) * limit, searchQuery);
  }, [currentPage, searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Content
      name='Comics'
      items={comics}
      total={total}
      limit={limit}
      page={currentPage}
      setPage={setCurrentPage}
      query={searchQuery}
      setQuery={setSearchQuery}
    />
  );
}

export default observer(Comics);
