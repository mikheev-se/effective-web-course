import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import comicsStore from '../../stores/ComicsStore';
import Content from '../Content/Content';
import Loading from '../Loading/Loading';

function Comics() {
  const { comics, loading } = comicsStore;

  useEffect(() => {
    comicsStore.getComicsList();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Content name='Comics' items={comics} />;
}

export default observer(Comics);
