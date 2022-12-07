import environments from '../config/environments';
import getListResponse from '../types/apiResponse';
import { Serial } from '../types/serial';
import instance from './helper/axios';

const getSeriesList = async (
  offset: number = 0,
  titleStartsWith: string = ''
): Promise<getListResponse & { series: Serial[] }> => {
  const params = {
    offset: offset,
    apikey: environments.apiKey,
    ...(titleStartsWith ? { titleStartsWith: titleStartsWith.toString() } : {}),
  };

  const response = (
    await instance.get('v1/public/series', {
      params: params,
    })
  ).data.data;

  const series = response.results;

  return {
    limit: response.limit,
    total: response.total,
    count: response.count,
    series: series.map((res: any): Serial => {
      const serial: Serial = {
        id: res.id,
        name: res.title,
        imageLink: res.thumbnail.path + '.' + res.thumbnail.extension,
        description: res.description
          ? res.description
          : 'No description provided',
        characters: res.characters.items,
        comics: res.comics.items,
      };

      return serial;
    }),
  };
};

const getSerial = async (id: number): Promise<Serial> => {
  try {
    const response = (
      await instance.get(`v1/public/series/${id}`, {
        params: {
          apikey: environments.apiKey,
        },
      })
    ).data.data;

    const serial = response.results[0];

    return {
      id: serial.id,
      name: serial.title,
      imageLink: serial.thumbnail.path + '.' + serial.thumbnail.extension,
      description: serial.description
        ? serial.description
        : 'No description provided',
      characters: serial.characters.items,
      comics: serial.comics.items,
    };
  } catch (err) {
    console.error(err);
    return {} as Serial;
  }
};

export { getSeriesList, getSerial };
