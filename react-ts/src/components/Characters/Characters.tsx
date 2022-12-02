import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import charactersStore from '../../stores/CharactersStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Characters() {
  const { limit, total, count, characters, loading } = charactersStore;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    charactersStore.getCharactersList((currentPage - 1) * limit, searchQuery);
  }, [currentPage, searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Content
      name='Characters'
      items={characters}
      total={total}
      limit={limit}
      page={currentPage}
      setPage={setCurrentPage}
      query={searchQuery}
      setQuery={setSearchQuery}
    />
  );
}

export default observer(Characters);
