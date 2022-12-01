import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import { Navigate, useRoutes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import Comics from './components/Comics/Comics';
import Series from './components/Series/Series';
import SingleCharacter from './components/SingleCharacter/SingleCharacter';
import SingleComic from './components/SignleComic/SingleComic';
import SingleSerial from './components/SingleSerial/SingleSerial';

function App() {
  return (
    <div id='page'>
      <Header />
      {useRoutes([
        { path: '/', element: <Navigate to='characters' /> },
        { path: 'characters', element: <Characters /> },
        { path: 'characters/:id', element: <SingleCharacter /> },
        { path: 'comics', element: <Comics /> },
        { path: 'comics/:id', element: <SingleComic /> },
        { path: 'series', element: <Series /> },
        { path: 'series/:id', element: <SingleSerial /> },
      ])}
      <Footer />
    </div>
  );
}

export default App;
