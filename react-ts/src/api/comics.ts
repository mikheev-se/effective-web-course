import environments from '../config/environments';
import getListResponse from '../types/apiResponse';
import { Comic } from '../types/comic';
import instance from './helper/axios';

const getComicsList = async (
  offset: number = 0,
  titleStartsWith: string = ''
): Promise<getListResponse & { comics: Comic[] }> => {
  const params = {
    offset: offset,
    apikey: environments.apiKey,
    ...(titleStartsWith ? { titleStartsWith: titleStartsWith.toString() } : {}),
  };

  const response = (
    await instance.get('v1/public/comics', {
      params: params,
    })
  ).data.data;

  const comics = response.results;

  return {
    limit: response.limit,
    total: response.total,
    count: response.count,
    comics: comics.map((res: any): Comic => {
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
    }),
  };
};

const getComic = async (id: number): Promise<Comic> => {
  try {
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
  } catch (err) {
    console.error(err);
    return {} as Comic;
  }
};

export { getComicsList, getComic };
