import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import React from 'react';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
