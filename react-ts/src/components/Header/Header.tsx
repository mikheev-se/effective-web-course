import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(
    () => setCurrentPage(sessionStorage.getItem('currentPage') ?? ''),
    []
  );

  return (
    <header>
      <img
        src='./marvel_logo.svg'
        className='header__logo'
        alt='marvel logo'
      ></img>
      <nav className='header__links'>
        <a
          href='./characters'
          className={
            'header__link' +
            (currentPage === 'characters' ? ' header__link--current' : '')
          }
          id='characters'
        >
          Characters
        </a>
        <a
          href='./comics'
          className={
            'header__link' +
            (currentPage === 'comics' ? ' header__link--current' : '')
          }
          id='comics'
        >
          Comics
        </a>
        <a
          href='./series'
          className={
            'header__link' +
            (currentPage === 'series' ? ' header__link--current' : '')
          }
          id='series'
        >
          Series
        </a>
      </nav>
    </header>
  );
};

export default Header;
