import CardType from './card';

type PageContent = {
  name: string;
  items: CardType[];
  total: number;
  limit: number;
  page: number;
  setPage: Function;
  query: string;
  setQuery: Function;
};

export default PageContent;
