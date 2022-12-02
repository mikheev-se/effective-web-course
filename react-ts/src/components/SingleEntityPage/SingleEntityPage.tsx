import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SinglePage from '../../types/singlepage';

import './SingleEntityPage.css';

function SingleEntityPage({ entity, relatedEntities }: SinglePage) {
  return (
    <div className='entity-page'>
      <div className='entity-image'>
        <img src={entity.imageLink}></img>
      </div>
      <div className='entity-content'>
        <div className='content__info'>
          <Typography variant='h5' sx={{ fontWeight: 900 }}>
            {entity.name}
          </Typography>
          <Typography variant='body1'>{entity.description}</Typography>
        </div>
        {Object.entries(relatedEntities).map(([key, value]) => (
          <div key={key}>
            <Typography
              variant='h5'
              sx={{ fontWeight: 900, textTransform: 'capitalize' }}
            >
              {key}
            </Typography>
            {value.map((rel, idx) => (
              <Typography variant='body1' key={idx}>
                <Link to={`/${key}/${rel.resourceURI.split('/').at(-1)}`}>
                  {rel.name}
                </Link>
              </Typography>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleEntityPage;
