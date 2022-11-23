import { Button, TextField } from '@mui/material';
import CardType from '../../types/card';
import Card from '../Card/Card';

let cards: CardType[] = [
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/c/b0/63755f7fcabd3/clean.jpg',
    name: 'Avengers Forever',
    description:
      'The Pillars: Conclusion! The greatest collection of Avengers ever seen has been assembled from across the Multiverse, representing each of the core pillars of the group’s infinite incarnations.',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/6/c0/637674be9e2c0/clean.jpg',
    name: 'X-Men',
    description:
      'As the new X-Men team brings deals with a seemingly unstoppable foe, one X-Man wrestles with the fact they’ve gone way too far',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/3/40/63755fa5a1821/clean.jpg',
    name: 'The Amazing Spider-Man',
    description:
      'Dark Web Prelude! We haven’t seen Chasm since ASM #894 and the FCBD issue, but that doesn’t mean he hasn’t been busy.',
  },
  {
    imageLink:
      'https://i.annihil.us/u/prod/marvel/i/mg/6/c0/63755f7e41d5a/clean.jpg',
    name: 'Fantastic Four: Facsimile Edition',
    description:
      'The first appearance of the Black Panther - from the wild imaginations of Stan Lee and Jack Kirby at the peak of their creative powers!',
  },
];

function Comics() {
  sessionStorage['currentPage'] = 'comics';
  return (
    <main>
      <div className='main__title'>
        <h1>
          Comics <span className='title__count'>({cards.length})</span>
        </h1>
      </div>
      <form className='search-form'>
        <TextField
          type='search'
          placeholder='Search for Comics by Name'
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

export default Comics;
