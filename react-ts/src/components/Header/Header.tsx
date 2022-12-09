import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img
        src='/marvel_logo.svg'
        className='header__logo'
        alt='marvel logo'
      ></img>
      <nav className='header__links'>
        <NavLink
          to='/characters'
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'header__link header__link--current' : 'header__link'
          }
          id='characters'
        >
          Characters
        </NavLink>
        <NavLink
          to='/comics'
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'header__link header__link--current' : 'header__link'
          }
          id='comics'
        >
          Comics
        </NavLink>
        <NavLink
          to='/series'
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'header__link header__link--current' : 'header__link'
          }
          id='series'
        >
          Series
        </NavLink>
        <NavLink
          to='/favorites'
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'header__link header__link--current' : 'header__link'
          }
          id='series'
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
