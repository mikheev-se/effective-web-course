import CardType from './card';

type PageContent = {
  name: String;
  items: CardType[];
  total: number;
  limit: number;
  page: number;
  setPage: Function;
  query: string;
  setQuery: Function;
};

export default PageContent;
