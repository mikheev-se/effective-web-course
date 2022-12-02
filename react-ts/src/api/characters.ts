import environments from '../config/environments';
import getListResponse from '../types/apiResponse';
import { Character } from '../types/character';
import instance from './helper/axios';

const getCharactersList = async (
  offset: number = 0
): Promise<getListResponse & { characters: Character[] }> => {
  const response = (
    await instance.get('v1/public/characters', {
      params: {
        offset: offset,
        apikey: environments.apiKey,
      },
    })
  ).data.data;

  const characters = response.results;

  return {
    limit: response.limit,
    total: response.total,
    count: response.count,
    characters: characters.map((res: any): Character => {
      const character: Character = {
        id: res.id,
        name: res.name,
        imageLink: res.thumbnail.path + '.' + res.thumbnail.extension,
        description: res.description
          ? res.description
          : 'No description provided',
        comics: res.comics.items,
        series: res.series.items,
      };

      return character;
    }),
  };
};

const getCharacter = async (id: number): Promise<Character> => {
  try {
    const response = (
      await instance.get(`v1/public/characters/${id}`, {
        params: {
          apikey: environments.apiKey,
        },
      })
    ).data.data;

    const character = response.results[0];

    return {
      id: character.id,
      name: character.name,
      imageLink: character.thumbnail.path + '.' + character.thumbnail.extension,
      description: character.description
        ? character.description
        : 'No description provided',
      comics: character.comics.items,
      series: character.series.items,
    };
  } catch (err) {
    console.error(err);
    return {} as Character;
  }
};

export { getCharactersList, getCharacter };
