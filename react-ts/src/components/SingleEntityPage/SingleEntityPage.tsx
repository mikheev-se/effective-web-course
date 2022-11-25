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
        {relatedEntities.map((ent) => (
          <div key={ent}>
            <Typography variant='h5' sx={{ fontWeight: 900 }}>
              {ent}
            </Typography>
            <Typography variant='body1'>
              <Link to={''}>здесь будет ссылка</Link>
            </Typography>
            <Typography variant='body1'>
              <Link to={''}>и здесь кстати тоже</Link>
            </Typography>
            <Typography variant='body1'>
              <Link to={''}>когда апи будет офк</Link>
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleEntityPage;
