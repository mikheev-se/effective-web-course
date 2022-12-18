import { Button, Pagination, TextField, Typography } from '@mui/material';
import React from 'react';
import PageContent from '../../types/content';
import Card from '../Card/Card';
import './Content.css';

function Content({
  name,
  items,
  total,
  limit,
  page,
  setPage,
  query,
  setQuery,
}: PageContent) {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <main>
      <div className='main__title'>
        <h1>
          {name} <span className='title__count'>({total})</span>
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
          defaultValue={query}
          inputRef={inputRef}
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
          onClick={(_) => {
            setQuery(inputRef.current?.value);
          }}
        >
          Search
        </Button>
      </form>
      <div className='main__content'>
        {items.length ? (
          items.map((item) => (
            <Card
              id={item.id}
              imageLink={item.imageLink}
              name={item.name}
              description={item.description}
              entityName={name}
              key={item.id}
            />
          ))
        ) : (
          <Typography variant='body1'>No content here currently</Typography>
        )}
      </div>
      <div className='main__pages'>
        <Pagination
          page={page}
          count={Math.floor(total / limit) + 1}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </div>
    </main>
  );
}

export default Content;
