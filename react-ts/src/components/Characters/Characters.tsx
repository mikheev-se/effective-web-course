import { Button, TextField } from '@mui/material';
import CardType from '../../types/card';
import Card from '../Card/Card';

let cards: CardType[] = [
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_incredible.jpg',
    name: '3-D Man',
    description: 'No description provided',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg',
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud всё я устал переписывать текст со скришнота пусть так будет",
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_incredible.jpg',
    name: '3-D Man',
    description: 'No description provided',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg',
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud всё я устал переписывать текст со скришнота пусть так будет",
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_incredible.jpg',
    name: '3-D Man',
    description: 'No description provided',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg',
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud всё я устал переписывать текст со скришнота пусть так будет",
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_incredible.jpg',
    name: '3-D Man',
    description: 'No description provided',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg',
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud всё я устал переписывать текст со скришнота пусть так будет",
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_incredible.jpg',
    name: '3-D Man',
    description: 'No description provided',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg',
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud всё я устал переписывать текст со скришнота пусть так будет",
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_incredible.jpg',
    name: '3-D Man',
    description: 'No description provided',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg',
    name: 'A-Bomb (HAS)',
    description:
      "Rick Jones has been Hulk's best bud всё я устал переписывать текст со скришнота пусть так будет",
  },
];

function Characters() {
  sessionStorage['currentPage'] = 'characters';
  return (
    <main>
      <div className='main__title'>
        <h1>
          Characters <span className='title__count'>({cards.length})</span>
        </h1>
      </div>
      <form className='search-form'>
        <TextField
          type='search'
          placeholder='Search for Characters by Name'
          size='small'
          sx={{
            width: '100%',
          }}
        ></TextField>
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'var(--search-yellow)',
            width: '320px',
            ':hover': {
              backgroundColor: 'var(--search-yellow)',
            },
          }}
        >
          Search
        </Button>
      </form>
      <div className='main__content'>
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </main>
  );
}

export default Characters;
