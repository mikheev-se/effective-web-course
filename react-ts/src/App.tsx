import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import Comics from './components/Comics/Comics';
import Series from './components/Series/Series';

function App() {
  return (
    <div id='page'>
      <Header />
      {useRoutes([
        { path: '/', element: <div /> },
        { path: 'characters', element: <Characters /> },
        { path: 'comics', element: <Comics /> },
        { path: 'series', element: <Series /> },
      ])}
      <Footer />
    </div>
  );
}

export default App;
