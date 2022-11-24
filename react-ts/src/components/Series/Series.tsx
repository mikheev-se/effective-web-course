import { Button, TextField } from '@mui/material';
import { series } from '../../mocks';
import Card from '../Card/Card';

function Series() {
  sessionStorage['currentPage'] = 'series';
  return (
    <main>
      <div className='main__title'>
        <h1>
          Series <span className='title__count'>({series.length})</span>
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
        {series.map((ser) => (
          <Card {...ser} key={ser.id} />
        ))}
      </div>
    </main>
  );
}

export default Series;
