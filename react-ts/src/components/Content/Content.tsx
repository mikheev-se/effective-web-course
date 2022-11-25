import { Button, TextField } from '@mui/material';
import PageContent from '../../types/content';
import Card from '../Card/Card';
import './Content.css';

function Content({ name, items }: PageContent) {
  return (
    <main>
      <div className='main__title'>
        <h1>
          {name} <span className='title__count'>({items.length})</span>
        </h1>
      </div>
      <form className='search-form'>
        <TextField
          type='search'
          placeholder={`Search for ${name} by Name`}
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
        {items.map((item) => (
          <Card
            id={item.id}
            imageLink={item.imageLink}
            name={item.name}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    </main>
  );
}

export default Content;
