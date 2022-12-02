import { Pagination } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import charactersStore from '../../stores/CharactersStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Characters() {
  const { limit, total, count, characters, loading } = charactersStore;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    charactersStore.getCharactersList((currentPage - 1) * limit);
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Content name='Characters' items={characters} />
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

export default observer(Characters);
