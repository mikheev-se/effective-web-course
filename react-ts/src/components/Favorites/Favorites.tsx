import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCharacter } from '../../api/characters';
import { getComic } from '../../api/comics';
import { getSerial } from '../../api/series';
import { Entity } from '../../types/entity';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

type Item = Entity & { entityName: string };

const getItems = async (): Promise<Item[]> => {
  const items: Item[] = [];
  for (let i = 0; i < localStorage.length; ++i) {
    const id = localStorage.key(i);
    if (!id) {
      continue;
    }

    const type = localStorage.getItem(id)?.toLowerCase();

    if (type === 'characters') {
      items.push({
        ...(await getCharacter(parseInt(id))),
        entityName: type,
      });
    } else if (type === 'comics') {
      items.push({
        ...(await getComic(parseInt(id))),
        entityName: type,
      });
    } else if (type === 'series') {
      items.push({
        ...(await getSerial(parseInt(id))),
        entityName: type,
      });
    }
  }

  return items;
};

function Favorites() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setItems(await getItems());
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <div className='main__title'>
        <h1>
          Favorites{' '}
          <span className='title__count'>({localStorage.length})</span>
        </h1>
      </div>
      <div className='main__content'>
        {items.length ? (
          items.map((item) => (
            <Card
              id={item.id}
              imageLink={item.imageLink}
              name={item.name}
              description={item.description}
              entityName={item.entityName}
              key={item.id}
            />
          ))
        ) : (
          <Typography variant='body1'>No content here currently</Typography>
        )}
      </div>
    </main>
  );
}

export default Favorites;
