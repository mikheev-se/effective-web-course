import { Button, TextField } from '@mui/material';
import CardType from '../../types/card';
import Card from '../Card/Card';

let cards: CardType[] = [
  {
    id: 0,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/8/8a/Ms._Marvel_%28TV_series%29_logo.jpeg',
    name: 'Ms. Marvel',
    description:
      'Ms. Marvel is an American television miniseries created by Bisha K. Ali for the streaming service Disney+, based on the Marvel Comics featuring the character Kamala Khan / Ms. Marvel.',
  },
  {
    id: 1,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/f/fc/Punisher_%28TV_series%29_logo.jpg',
    name: 'The Punisher',
    description:
      "Marvel's The Punisher is an American television series created by Steve Lightfoot for the streaming service Netflix, based on the Marvel Comics character Punisher.",
  },
  {
    id: 2,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/8/8a/Ms._Marvel_%28TV_series%29_logo.jpeg',
    name: 'Ms. Marvel',
    description:
      'Ms. Marvel is an American television miniseries created by Bisha K. Ali for the streaming service Disney+, based on the Marvel Comics featuring the character Kamala Khan / Ms. Marvel.',
  },
  {
    id: 3,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/f/fc/Punisher_%28TV_series%29_logo.jpg',
    name: 'The Punisher',
    description:
      "Marvel's The Punisher is an American television series created by Steve Lightfoot for the streaming service Netflix, based on the Marvel Comics character Punisher.",
  },
  {
    id: 4,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/8/8a/Ms._Marvel_%28TV_series%29_logo.jpeg',
    name: 'Ms. Marvel',
    description:
      'Ms. Marvel is an American television miniseries created by Bisha K. Ali for the streaming service Disney+, based on the Marvel Comics featuring the character Kamala Khan / Ms. Marvel.',
  },
  {
    id: 5,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/f/fc/Punisher_%28TV_series%29_logo.jpg',
    name: 'The Punisher',
    description:
      "Marvel's The Punisher is an American television series created by Steve Lightfoot for the streaming service Netflix, based on the Marvel Comics character Punisher.",
  },
  {
    id: 6,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/8/8a/Ms._Marvel_%28TV_series%29_logo.jpeg',
    name: 'Ms. Marvel',
    description:
      'Ms. Marvel is an American television miniseries created by Bisha K. Ali for the streaming service Disney+, based on the Marvel Comics featuring the character Kamala Khan / Ms. Marvel.',
  },
  {
    id: 7,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/en/f/fc/Punisher_%28TV_series%29_logo.jpg',
    name: 'The Punisher',
    description:
      "Marvel's The Punisher is an American television series created by Steve Lightfoot for the streaming service Netflix, based on the Marvel Comics character Punisher.",
  },
];

function Series() {
  sessionStorage['currentPage'] = 'series';
  return (
    <main>
      <div className='main__title'>
        <h1>
          Series <span className='title__count'>({cards.length})</span>
        </h1>
      </div>
      <form className='search-form'>
        <TextField
          type='search'
          placeholder='Search for Series by Name'
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
          <Card {...card} key={card.id} />
        ))}
      </div>
    </main>
  );
}

export default Series;
