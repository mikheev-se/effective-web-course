import { Button, TextField } from '@mui/material';
import Card from '../Card/Card';
import { characters } from '../../mocks';

function Characters() {
  sessionStorage['currentPage'] = 'characters';
  return (
    <main>
      <div className='main__title'>
        <h1>
          Characters <span className='title__count'>({characters.length})</span>
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
        {characters.map((character) => (
          <Card {...character} key={character.id} />
        ))}
      </div>
    </main>
  );
}

export default Characters;
