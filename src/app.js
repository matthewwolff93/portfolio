import {BrowserRouter} from 'react-router-dom';

import Header from './components/header';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}
