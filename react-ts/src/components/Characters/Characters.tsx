import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import charactersStore from '../../stores/CharactersStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Characters() {
  const { characters, loading } = charactersStore;

  useEffect(() => {
    charactersStore.getCharactersList();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Content name='Characters' items={characters} />;
}

export default observer(Characters);
