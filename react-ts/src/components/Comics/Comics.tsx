import { Button, TextField } from '@mui/material';
import { comics } from '../../mocks';
import Card from '../Card/Card';

function Comics() {
  sessionStorage['currentPage'] = 'comics';
  return (
    <main>
      <div className='main__title'>
        <h1>
          Comics <span className='title__count'>({comics.length})</span>
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
        {comics.map((comic) => (
          <Card {...comic} key={comic.id} />
        ))}
      </div>
    </main>
  );
}

export default Comics;
