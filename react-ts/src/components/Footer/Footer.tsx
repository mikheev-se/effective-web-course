import './Footer.css';

function Footer() {
  return (
    <footer>
      <img
        src='./marvel_logo.svg'
        className='footer__logo'
        alt='marvel logo'
      ></img>
      <div className='footer__copyright'>
        Data provided by Marvel © {new Date().getFullYear()} MARVEL
      </div>
      <a className='footer__link' href='developer.marvel.com'>
        developer.marvel.com
      </a>
    </footer>
  );
}

export default Footer;
