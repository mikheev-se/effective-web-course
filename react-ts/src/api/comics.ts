import environments from '../config/environments';
import { Comic } from '../types/comic';
import instance from './helper/axios';

const getComicsList = async (): Promise<Comic[]> => {
  const response = (
    await instance.get('v1/public/comics', {
      params: {
        apikey: environments.apiKey,
      },
    })
  ).data.data;

  const comics = response.results;

  return comics.map((res: any): Comic => {
    const comic: Comic = {
      id: res.id,
      name: res.title,
      imageLink: res.thumbnail.path + '.' + res.thumbnail.extension,
      description: res.description
        ? res.description
        : 'No description provided',
      characters: res.characters.items,
      series: [res.series],
    };

    return comic;
  });
};

const getComic = async (id: number): Promise<Comic> => {
  const response = (
    await instance.get(`v1/public/comics/${id}`, {
      params: {
        apikey: environments.apiKey,
      },
    })
  ).data.data;

  const comic = response.results[0];

  return {
    id: comic.id,
    name: comic.title,
    imageLink: comic.thumbnail.path + '.' + comic.thumbnail.extension,
    description: comic.description
      ? comic.description
      : 'No description provided',
    characters: comic.characters.items,
    series: [comic.series],
  };
};

export { getComicsList, getComic };
